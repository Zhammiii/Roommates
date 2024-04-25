import axios from "axios";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { recalcularDeudas } from "../controllers/calculo.controllers.js"

export async function nuevoRoommate (req,res) {
  try {
    const response = await axios.get("https://randomuser.me/api");
    const newRoommate = response.data.results[0];
    const roommate = {
      id: uuidv4(),
      nombre: newRoommate.name.first + " " + newRoommate.name.last,
      debe: 0,
      recibe:0,
    };
    const roommatesData = fs.readFileSync("roommates.json", "utf8");
    const data = JSON.parse(roommatesData);
    const roommie = data.roommates
    roommie.push(roommate);
    fs.writeFileSync("roommates.json", JSON.stringify(data));
    recalcularDeudas();
    console.log("Nuevo roommate añadido:", roommate);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener un usuario de la API:", error.message);
  }
}

export async function getRoommates(req, res) {
  try {
    const roommatesData = fs.readFileSync("roommates.json", "utf8");
    const data = JSON.parse(roommatesData);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de roommates:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
