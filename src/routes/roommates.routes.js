import { Router } from "express";
const router = Router();
import { nuevoRoommate , getRoommates } from "../controllers/roommates.controllers.js";

/* obtener roommates */
router.get("/roommates", getRoommates );

/* Agregar roommates */
router.post("/roommates",nuevoRoommate);

export default router;
