import {request, Router} from "express";
import {methods as ejemploController } from "../controllers/ejemplo.controller";

const router = Router();

router.post("/SubirImg", ejemploController.SubirImg);

export default router;