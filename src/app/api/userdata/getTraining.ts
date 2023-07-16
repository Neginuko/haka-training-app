import { NextApiRequest, NextApiResponse } from "next";
import { getNameFromTrainingId } from "../../../util/api";
import { prisma } from "../../../lib/prisma";

export async function handler(request: NextApiRequest, response: NextApiResponse) {
    const req = JSON.parse(request.body);

    try {
        const data = await getNameFromTrainingId(req.trainingName);
        if (data === null) {
            const data = await prisma.training.create({
                data: {
                    name: req.trainingName,
                    load: 1,
                }
            });
            response.status(200).json({ data });
            return;
        }
        response.status(200).json({ data });
    } catch(error) {
        response.status(500).json({ error });
    }
}