import { NextApiRequest, NextApiResponse } from "next";

interface SubscribeResponse {
    message: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SubscribeResponse>
): Promise<void> {
    if (req.method === "POST") {
        const { email } = req.body;

        if (!email || !email.includes("@")) {
            return res.status(400).json({ message: "Invalid email address" });
        }

        try {
            return res
                .status(200)
                .json({ message: "Subscribed successfully!" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Error subscribing to newsletter" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
