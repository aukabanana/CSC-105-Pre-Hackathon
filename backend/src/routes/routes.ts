import { Router } from 'express'
import notificationRouter from '../modules/notification/routers/notification.router.js'
import deviceRouter from '../modules/devices/routers/devices.router.js'
import { authenticate } from '../middlewares/auth.midleware.js'
import { getDashboardData } from '../modules/dashboard/controllers/dashboard.controller.js'
import electricRouter from '../modules/electric-charge/routers/electric-charge.router.js';

const router = Router();

router.use('/notifications',authenticate, notificationRouter)
router.use('/devices', authenticate, deviceRouter)
router.get('/dashboard', authenticate, getDashboardData)
router.use("/electronics", authenticate, electricRouter);


export default router;