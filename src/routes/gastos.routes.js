import { Router } from "express";
const router = Router();
import { agregarGasto , updateGasto ,deleteGasto , getGastos} from "../controllers/gastos.controllers.js";
import { recalcularDeudas } from "../controllers/calculo.controllers.js"

/* obtener pagos */
router.get("/", getGastos);

/*  agregar gastos*/
router.post("/", agregarGasto  );

/* modificar pagos */
router.put("/", updateGasto );

/* borrar pagos */
router.delete("/", deleteGasto );

export default router;
