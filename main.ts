import { writeFile } from "fs/promises";
import { render,renderIndividuales } from "./render.js";
import { loadPhotos } from "./photos.js";
import { existsSync, mkdirSync } from "fs";

const datos = await loadPhotos();
const html = render(datos);
await writeFile("photos.html", html);


const dir = "./individuales";
if(!existsSync(dir)){
  mkdirSync(dir)
}else{
  console.log("la carpeta ya existe");
}

for (const dato of datos) {
  renderIndividuales(dato);  
  await writeFile(`./individuales/${dato.id}.html`, html);
}