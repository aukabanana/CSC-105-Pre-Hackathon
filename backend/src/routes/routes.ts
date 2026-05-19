import * as controller from '../controllers/system.controller.js'
import { Router } from 'express'

const router = Router()

router.get('/api/electronics',  controller.getCalElectronics)
router.patch('/api/electronics/:id', controller.getCalElectronicsById)

router.post('/api/mock-data/elec', controller.createMockElectric)
router.post('/api/mock-data/noti', controller.createMockNotifications)

export default router