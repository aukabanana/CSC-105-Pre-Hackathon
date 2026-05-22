import * as controller from '../controllers/system.controller.js'
import { Router } from 'express'
import notificationRouter from '../modules/notification/routers/notification.router.js'
import { getCalElectronics, getCalElectronicsById } from '../controllers/system.controller.js';


const router = Router();

router.get("/electronics", getCalElectronics);
router.patch("/electronics/:id", getCalElectronicsById);
router.use('/notifications', notificationRouter);

export default router;

