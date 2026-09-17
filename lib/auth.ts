import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@dakshjanaseva.org" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        // Auto-ensure the admin user exists with the exact bcryptjs hash
        const hashedPassword = await bcrypt.hash("Daksh@577453", 10);
        await prisma.adminUser.upsert({
          where: { email: 'admin@dakshjanaseva.org' },
          update: { password: hashedPassword },
          create: {
            email: 'admin@dakshjanaseva.org',
            password: hashedPassword,
            name: 'Site Administrator',
          },
        });

        const user = await prisma.adminUser.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
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
