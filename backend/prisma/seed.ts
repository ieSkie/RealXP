import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const stats = [
  {
    name: "Сила",
    description: "Физическая активность и тренировки",
    icon: "strength",
  },
  {
    name: "Интеллект",
    description: "Обучение, чтение, развитие навыков",
    icon: "intellect",
  },
  {
    name: "Здоровье",
    description: "Сон, питание, забота о теле",
    icon: "health",
  },
  {
    name: "Дисциплина",
    description: "Выполнение задач в срок",
    icon: "discipline",
  },
];

async function main() {
  for (const stat of stats) {
    await prisma.stat.upsert({
      where: { name: stat.name },
      update: { description: stat.description, icon: stat.icon },
      create: stat,
    });
  }
  console.log("Stats seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
