import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export async function handler(request: NextApiRequest, response: NextApiResponse) {
    const req = JSON.parse(request.body);

    try {
        const rdata = await prisma.record.findMany({
            where: {
                userId: req.userId,
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
            interface rec {
                id: String,
                date: String,
                trainingId : String,
                doneTimes: Number,
            };
            let rr: rec = {
                id: r.id,
                date: t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate(),
                trainingId: r.trainingId,
                doneTimes: r.doneTimes,
            };
            data.push(rr);
        }
        return response.status(200).json({ data });
    } catch(error) {
        return response.status(500).json({ error });
    }
}