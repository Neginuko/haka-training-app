import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export async function handler(request: NextApiRequest, response: NextApiResponse) {
    const req = JSON.parse(request.body);

    try {
        const data = await prisma.record.create({
            data: {
                userId: req.userId,
                trainingId: req.trainingId,
                doneTimes: req.times,
            }
        });

        return response.status(200).json(data);
    } catch(error) {
        return response.status(500).send(error);
    }
}