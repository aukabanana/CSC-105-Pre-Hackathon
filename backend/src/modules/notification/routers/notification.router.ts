import { Router } from "express";
import { getAllNotification,updateNotificationAsRead } from "../controllers/notification.controller.js";

const notificationRouter = Router();

notificationRouter.get('/', getAllNotification);
notificationRouter.patch('/:id/read', updateNotificationAsRead)

export default notificationRouter;