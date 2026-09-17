import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@dakshjanaseva.org" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === 'admin@dakshjanaseva.org' && credentials?.password === 'Daksh@577453') {
          return {
            id: "1",
            name: "Site Administrator",
            email: "admin@dakshjanaseva.org",
          };
        }
        throw new Error("Invalid credentials");
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/en/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = session.user || {};
        (session.user as any).id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
};
