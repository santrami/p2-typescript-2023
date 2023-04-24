import { writeFile } from "fs/promises";
import { render,generarIndividual } from "./render.js";
import { loadPhotos } from "./photos.js";
import { existsSync, mkdirSync } from "fs";

const datos = await loadPhotos();
const html = render(datos);
await writeFile("photos.html", html);

/* haciendo páginas individuales */
const dir = "./individuales";
!existsSync(dir) ? mkdirSync(dir) : console.log("ya existe el directorio"); 

for (const dato of datos) {
  const individual= generarIndividual(dato);  
  await writeFile(`./individuales/${dato.id}.html`, individual);
}