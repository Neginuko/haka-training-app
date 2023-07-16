import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const trainings = [
    { displayName: '腹筋', name: 'abdominal' },
    { displayName: 'V字腹筋', name: 'vAbdominal' },
    { displayName: '腕立て', name: 'pushups' },
    { displayName: '背筋', name: 'back' },
    { displayName: 'スクワット', name: 'squat' },
    { displayName: 'ブルガリアンスクワット', name: 'bulgarianSquat' },
    { displayName: 'フロントランジ', name: 'frontLunge' },
    { displayName: 'サイドランジ', name: 'sideLunge' },
    { displayName: 'ヒップリフト', name: 'hiplift' },
    { displayName: 'カーフレイズ', name: 'callfraise' },
  ];

  for (let training of trainings) {
    await prisma.training.create({
      data: {
        name: training.name,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
