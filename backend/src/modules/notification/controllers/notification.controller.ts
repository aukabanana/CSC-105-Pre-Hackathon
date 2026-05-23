import type { Request, Response } from "express";
import { getNotification } from "../models/notification.model.js";

export const getAllNotification = async (_req: Request, res: Response) => {
    try {
        const notifications = await getNotification();

        res.status(200).json({ data: notifications });
    } catch (e) {
        console.error("Get notification error: ", e);

        res.status(500).json({ message: "Internal Server Error" });
    }
}