import { prisma } from '../lib/prisma';

export type ResponseMessage = {
  message: string;
};

export type Commit = {
  id?: string;
  date?: string;
  trainingId?: string;
  doneTimes?: number;
};

export async function getCommitsFromUserId(id: string) {
  try {
    const rdata = await prisma.record.findMany({
      where: {
        userId: id,
      },
      select: {
        id: true,
        date: true,
        trainingId: true,
        doneTimes: true,
      },
    });
    let data = [];
    for (let i = 0; i < rdata.length; i++) {
      let r = rdata[i];
      let t = rdata[i].date;
      let rr: Commit = {
        id: r.id,
        date: t.getFullYear() + '/' + t.getMonth() + '/' + t.getDate(),
        trainingId: r.trainingId,
        doneTimes: r.doneTimes,
      };
      data.push(rr);
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function getCommitsFromUserIdOnDate(userId: string, date: Date) {
  try {
    const data = await prisma.record.findMany({
      where: {
        userId: userId,
        date: {
          gte: date,
          lt: new Date(date.setDate(date.getDate() + 1)),
        },
      },
      select: {
        id: true,
        date: true,
        trainingId: true,
        doneTimes: true,
      },
    });
    return data;
  } catch (error) {}
}

export async function getTrainingCommitCount(userId: string) {
  try {
    const rdata = (await getCommitsFromUserId(userId)) ?? [];
    interface fmt {
      [propName: string]: number;
    }
    const data: fmt = {};
    for (let item of rdata) {
      const trainingName = await getNameFromTrainingId(item.trainingId!);
      if (!Object.keys(data).some((v) => v === trainingName)) {
        data[trainingName ?? '__'] = item.doneTimes ?? 0;
      } else {
        data[trainingName ?? '__'] += item.doneTimes ?? 0;
      }
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function getDailyCommitCount(userId: string) {
  try {
    const rdata = (await getCommitsFromUserId(userId)) ?? [];
    interface fmt {
      [propName: string]: number;
    }
    const data: fmt = {};
    for (let item of rdata) {
      if (!Object.keys(data).some((v) => v === item.date)) {
        data[item.date ?? '__'] = 1;
      } else {
        data[item.date ?? '__'] += 1;
      }
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function getNameFromTrainingId(trainingId: string) {
  try {
    const result = await prisma.training.findUnique({
      where: {
        id: trainingId,
      },
    });
    return result?.name ?? '';
  } catch (error) {
    return null;
  }
}

export async function getAverageOnDate(date: Date) {
  const nextdate = new Date(date);
  nextdate.setDate(date.getDate() + 1);
  try {
    const commits = await prisma.record.findMany({
      select: {
        id: true,
        trainingId: true,
        doneTimes: true,
      },
      where: {
        date: {
          gte: date,
          lt: nextdate,
        },
      },
    });
    interface fmt {
      [propName: string]: number;
    }
    let data: fmt = {};
    for (let item of commits) {
      const trainName = await getNameFromTrainingId(item.trainingId);
      if (!Object.keys(data).some((v) => v === trainName)) {
        data[trainName ?? '__'] = item.doneTimes;
      } else {
        data[trainName ?? '__'] += item.doneTimes;
      }
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function getRatingFromUserId(userId: string) {
  try {
    const data = await prisma.rating.findMany({
      select: {
        date: true,
        rate: true,
      },
      where: {
        userId: userId,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
}

export async function setRatingToUserIdOnDate(userId: string, date: Date) {
  const nextdate = new Date(date);
  nextdate.setDate(date.getDate() + 1);
  const prevdate = new Date(date);
  prevdate.setDate(date.getDate() - 1);
  try {
    const currentRate = await prisma.rating.findFirst({
      select: {
        rate: true,
      },
      where: {
        date: {
          gte: prevdate,
          lt: date,
        },
      },
    });
    const users = await prisma.user.count();
    const commitsAvg = await getAverageOnDate(prevdate);
    let allAvg = 0;
    for (let item in commitsAvg) {
      allAvg += commitsAvg.item;
    }
    allAvg /= users;
    const value = 0;
    const userData = await getCommitsFromUserIdOnDate(userId, prevdate);
    for (let item of userData!) {
      item.doneTimes += value;
    }
    const rate = rating(allAvg, value, currentRate!.rate);
    const res = prisma.rating.create({
      data: {
        userId: userId,
        rate: rate,
      },
    });

    return res;
  } catch (error) {}
}

function rating(allAvg: number, value: number, currentRate: number) {
  const K = 16;
  const rrate = K / (10 ** ((Math.max(allAvg, value) - Math.min(allAvg, value)) / 100) + 1);
  const rate = clamp(rrate, 0.2, 64);
  return Math.ceil(currentRate + rate + 0.5);
}

function clamp(rrate: number, min: number, max: number) {
  if (rrate < min) {
    return min;
  } else if (rrate > max) {
    return max;
  }
  return rrate;
}
