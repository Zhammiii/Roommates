import { Router } from "express";
const router = Router();
import { nuevoRoommate , getRoommates } from "../controllers/roommates.controllers.js";
import { recalcularDeudas } from "../controllers/calculo.controllers.js"

/* obtener roommates */
router.get("/", getRoommates );

/* Agregar roommates */
router.post("/",nuevoRoommate);

export default router;
