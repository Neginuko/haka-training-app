import { NextApiRequest, NextApiResponse } from "next";
import { setRatingToUserIdOnDate } from "../../../util/api";

export async function handler(request: NextApiRequest, response: NextApiResponse) {
    const req = JSON.parse(request.body);

    try {
        const data = await setRatingToUserIdOnDate(req.userId, new Date());
        response.status(200).json({ data });
    } catch(error) {
        response.status(500).json({ error });
    }
}