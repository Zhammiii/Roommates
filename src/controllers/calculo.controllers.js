import fs from "fs";


export const recalcularDeudas = () => {
    const roommatesData = fs.readFileSync("roommates.json", "utf8");
    const gastosData = fs.readFileSync("gastos.json", "utf8");
    const { roommates } = JSON.parse(roommatesData);
    const { gastos } = JSON.parse(gastosData);
    roommates.forEach((r) => {
      r.debe = 0;
      r.recibe = 0;
      r.total = 0;
    });
    gastos.forEach((g) => {
      const montoPorPersona = g.monto / roommates.length;
      roommates.forEach((r) => {
        if (g.roommate === r.nombre) {
          r.recibe += montoPorPersona * (roommates.length - 1);
        } else {
          r.debe -= montoPorPersona;
        }
        r.total = r.recibe - r.debe;
      });
    });
    fs.writeFileSync("roommates.json", JSON.stringify({ roommates }));
  };