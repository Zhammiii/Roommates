import axios from "axios";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

/* agregar gasto */
export async function agregarGasto(req, res) {
  try {
    const { roommate, descripcion, monto } = req.body;
    const gasto = { id: uuidv4(), roommate, descripcion, monto };
    const gastos = fs.readFileSync("gastos.json", "utf8");
    const data = await JSON.parse(gastos);
    const newGasto = data.gastos
    newGasto.push(gasto);
    fs.writeFileSync("gastos.json", JSON.stringify(data));
    console.log("Nuevo gasto añadido:", roommate);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al agregar el gasto:", error);
    res.status(500).json({ error: "Error al agregar el gasto" });
  }
}

/* get pago para front  */
export async function editGasto(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ error: "error al editar el gasto" });
  }
}

/* modificar el pago desde el json */
export async function updateGasto(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ error: "error al modificar el gasto" });
  }
}

/* eliminar un pago especifico en el json (find?filter? pop?)  */
export async function deleteGasto(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ error: "error al eliminar el gasto" });
  }
}
