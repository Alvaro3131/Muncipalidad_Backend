import { Router } from "express";
import * as contribuyente from "../controllers/contribuyente.controller";
const router = Router();
router.get("/", contribuyente.getContribuyente);
router.post("/", contribuyente.createContribuyente);
export default router;
