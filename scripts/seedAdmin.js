const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@dakshjanaseva.org';
  const password = 'Daksh@577453';
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = await prisma.adminUser.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      email,
      password: hashedPassword,
      name: 'Site Administrator',
    },
  });
  
  console.log('Test Admin created/updated successfully:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
