import { Router } from "express";
const router = Router();
import { agregarGasto , editGasto , updateGasto ,deleteGasto } from "../controllers/gastos.controllers.js";

/* obtener pagos */
router.get("/", editGasto);

/*  */
router.post("/", agregarGasto);

/* modificar pagos */
router.put("/", updateGasto);

/* borrar pagos */
router.delete("/", deleteGasto);

export default router;
