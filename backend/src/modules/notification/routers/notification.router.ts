import { Router } from "express";
import { getAllNotification } from "../controllers/notification.controller.js";

const notificationRouter = Router();

notificationRouter.get('/', getAllNotification);

export default notificationRouter;