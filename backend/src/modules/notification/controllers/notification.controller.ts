import type { Request, Response } from "express";
import { getNotification, markNotificationAsRead } from "../models/notification.model.js";

type NotificationParams = {
    id: string;
}

export const getAllNotification = async (_req: Request, res: Response) => {
    try {
        const notifications = await getNotification();

        if (!notifications) {
            res.status(404).json({ message: "Data Not Found" })
        }

        res.status(200).json({ data: notifications });
    } catch (e) {
        console.error("Get notification error: ", e);

        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateNotificationAsRead = async (req: Request<NotificationParams>, res: Response) => {
    try {
        const { id } = req.params;

        if (!id || Array.isArray(id)) {
            res.status(400).json({
                message: "Invalid notification Id",
            });
            return;
        }

        const notification = await markNotificationAsRead(id);

        res.status(200).json({
            message: 'Notification marked as read successfully',
            data: notification
        })

    } catch (e) {
        console.error("Get notification error: ", e);

        res.status(500).json({ message: "Internal Server Error" });
    }
}