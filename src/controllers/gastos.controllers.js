import fs from "fs";
import { v4 as uuidv4 } from "uuid";

/* agregar gasto */
export async function agregarGasto(req, res) {
  try {
    const { roommate, descripcion, monto } = req.body;
    const gasto = { id: uuidv4(), roommate, descripcion, monto };
    const gastos = fs.readFileSync("gastos.json", "utf8");
    const data = await JSON.parse(gastos);
    const newGasto = data.gastos;
    newGasto.push(gasto);
    fs.writeFileSync("gastos.json", JSON.stringify(data));
    console.log("Nuevo gasto añadido:", roommate);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al agregar el gasto:", error);
    res.status(500).json({ error: "Error al agregar el gasto" });
  }
}

/* Get gastos  */
export async function getGastos(req, res) {
  try {
    const gastosData = fs.readFileSync("gastos.json", "utf8");
    const data = JSON.parse(gastosData);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de gastos:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
/* modificar el pago desde el json */
export async function updateGasto(req, res) {
  try {
    const { id } = req.query;
    const { roommate, descripcion, monto } = req.body;
    const gastosData = fs.readFileSync("gastos.json", "utf8");
    const data = JSON.parse(gastosData);
    let gastos = data;
    gastos = gastos.map((gasto) => {
      if (gasto.id === id) {
        gasto.roommate = roommate;
        gasto.descripcion = descripcion;
        gasto.monto = monto;
      }
      return gasto;
    });
    fs.writeFileSync("gastos.json", JSON.stringify(gastos));
    res.status(200).json(gastos);
  } catch (error) {
    console.error("Error al modificar el gasto:", error);
    res.status(500).json({ error: "Error al modificar el gasto" });
  }
}

/* eliminar un pago especifico en el json  */
export async function deleteGasto(req, res) {
  try {
    const { id } = req.query;
    const gastosData = fs.readFileSync("gastos.json", "utf8");
    const data = JSON.parse(gastosData);
    let gastos = data;

    const gastosFindIndex = gastos.FindIndex((gastos) => gastos.id === id);
    if (gastosFindIndex !== -1) {
      gastos.splice(gastosFindIndex, 1);
      fs.writeFileSync("gastos.json", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    res.status(500).json({ error: "error al eliminar el gasto" });
  }
}
