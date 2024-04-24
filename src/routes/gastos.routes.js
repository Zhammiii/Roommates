import { Router } from "express";
const router = Router();
import { agregarGasto , editGasto , updateGasto ,deleteGasto } from "../controllers/gastos.controllers.js";

/* obtener pagos */
router.get("/gastos", editGasto);

/*  */
router.post("/gastos", agregarGasto);

/* modificar pagos */
router.put("/gastos", updateGasto);

/* borrar pagos */
router.delete("/gastos", deleteGasto);

export default router;
