import { Router} from 'express'
import { createDevices, deleteDevice, getAllDevices, updateDeviceStatus } from '../controllers/devices.controller.js'

const deviceRouter = Router();

deviceRouter.get('/', getAllDevices);
deviceRouter.post('/', createDevices)
deviceRouter.patch('/:id', updateDeviceStatus)
deviceRouter.delete('/:id', deleteDevice)

export default deviceRouter;
