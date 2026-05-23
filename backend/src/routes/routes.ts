import * as controller from '../controllers/system.controller.js'
import { Router } from 'express'
import notificationRouter from '../modules/notification/routers/notification.router.js'

const router = Router()

router.get('/api/electronics',  controller.getCalElectronics)
router.patch('/api/electronics/:id', controller.getCalElectronicsById)
router.use('/notifications', notificationRouter)

export default router