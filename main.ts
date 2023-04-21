import { writeFile, exists, mkdir } from "fs/promises";
import { render,renderIndividuales } from "./render.js";
import { loadPhotos } from "./photos.js";

const datos = await loadPhotos();
const html = render(datos);
await writeFile("photos.html", html);


const dir = "./individuales";
mkdir(dir);

for (const dato of datos) {
  renderIndividuales(dato);  
  writeFile(`./individuales/${dato.id}.html`, html);
}