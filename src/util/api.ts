import { prisma } from "../lib/prisma";

export type ResponseMessage = {
    message: string,
}

export type Commit = {
    id?: string,
    date?: string,
    trainingId?: string,
    doneTimes?: number,
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
        let data = []
        for (let i=0; i<rdata.length; i++) {
            let r = rdata[i];
            let t = rdata[i].date;
            let rr: Commit = {
                id: r.id,
                date: t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate(),
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

export async function getTrainingCommitCount(userId: string) {
    try {
        const rdata = await getCommitsFromUserId(userId) ?? [];
        interface fmt {
            [propName: string]: number,
        };
        const data: fmt = {};
        for (let item of rdata) {
            const trainingName = await getNameFromTrainingId(item.trainingId!);
            if (!Object.keys(data).some((v) => v === trainingName)) {
                data[trainingName] = item.doneTimes ?? 0;
            } else {
                data[trainingName] += item.doneTimes ?? 0;
            }
        }
        return data;
    } catch (error) {
        return null;
    }
}

export async function getDailyCommitCount(userId: string) {
    try {

        const rdata = await getCommitsFromUserId(userId) ?? [];
        interface fmt {
            [propName: string]: number,
        };
        const data: fmt = {};
        for(let item of rdata) {
            if (!Object.keys(data).some((v) => v === item.date)) {
                data[item.date ?? "__"] = 1;
            } else {
                data[item.date ?? "__"] += 1;
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
            }
        });
        return result?.name ?? "";
    } catch (error) {
        return null;
    }
}

export async function getAverageOnDate(date: Date) {
    const fdate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();

    try {
        const commits = await prisma.record.findMany({
            select: {
                id: true,
                trainingId: true,
                doneTimes: true,
            }
        });
        interface fmt {
            id: string,
            trainingId: string,
            trainingName: string,
            doneTimes: number,
        };
        const data: fmt[] = [];
        for (let item of commits) {
            data.push({
                id: item.id,
                trainingId: item.trainingId,
                trainingName: await getNameFromTrainingId(item.trainingId) ?? "",
                doneTimes: item.doneTimes,
            });
        }
        return data;
    } catch (error) {
        return null;
    }
}

export async function calcScores(userId: string) {
    
}