import { Router } from "express";
import rutasPagos from "./gastos.routes.js";
import rutaRoommates from "./roommates.routes.js";
const router = Router();

/* Rutas */
router.get("/", async (req, res) => {
  try {
    res.sendFile("/index.html");
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
});

router.use("/gastos", rutasPagos);
router.use("/roommates", rutaRoommates);


export default router;
