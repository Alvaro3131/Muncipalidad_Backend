import { Router } from "express";
import * as contribuyente from "../controllers/contribuyente.controller";
const router = Router();
router.get("/", contribuyente.getContribuyente);
router.delete("/", contribuyente.deleteContribuyente);
router.get("/getContribuyente", contribuyente.buscarContribuyente);
router.post("/", contribuyente.createContribuyente);
export default router;
