import { Router } from "express";
import { getCalElectronics, getCalElectronicsById } from '../controllers/system.controller.js';

const router = Router();

router.get("/electronics", getCalElectronics);
router.patch("/electronics/:id", getCalElectronicsById);

export default router;

