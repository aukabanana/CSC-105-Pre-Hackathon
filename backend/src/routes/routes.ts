import * as controller from '../controllers/system.controller.js'
import { Router } from 'express'
import notificationRouter from '../modules/notification/routers/notification.router.js'
import deviceRouter from '../modules/devices/routers/devices.router.js'
import { authenticate } from '../middlewares/auth.midleware.js'
import { createDevices, deleteDevice, updateDeviceStatus } from '../modules/devices/controllers/devices.controller.js'
import { getDashboardData } from '../modules/dashboard/controllers/dashboard.controller.js'
import electricRouter from '../modules/electric-charge/routers/electric-charge.router.js';

const router = Router();

router.get('/api/electronics',  controller.getCalElectronics)
router.patch('/api/electronics/:id', controller.getCalElectronicsById)
router.post('/device-new', authenticate, createDevices)
router.patch('/device-status/:id', authenticate, updateDeviceStatus)
router.use('/notifications',authenticate, notificationRouter)
router.use('/devices', authenticate, deviceRouter)
router.use('/dashboard', authenticate, getDashboardData)
router.use("/electronics", authenticate, electricRouter);


export default router;