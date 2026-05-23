import { Router } from "express";
import { getCalElectronics, getCalElectronicsById } from "../controllers/electric-charge.controller.js";

const electricRouter = Router();

electricRouter.get("/", getCalElectronics);
electricRouter.patch("/:id", getCalElectronicsById);

export default electricRouter;