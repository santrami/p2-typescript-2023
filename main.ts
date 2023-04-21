import { writeFile, exists, mkdir } from "fs/promises";
import { render } from "./render.js";
import { loadPhotos } from "./photos.js";

const datos = await loadPhotos();
const html = render(datos);
await writeFile("photos.html", html);


const dir = "./individuales";
mkdir(dir);

for (const dato of datos) {
  let html = ` <h1>${dato.rover.name} - ${dato.camera.full_name}</h1>
  <img src="${dato.image}" alt="${dato.rover.name} - ${dato.camera.full_name}">
  <p>Earth Date: ${dato.earth_date}</p>
  <p>Rover Status: ${dato.rover.status}</p>
  <p>Launch Date: ${dato.rover.launch_date}</p>
  <p>Landing Date: ${dato.rover.landing_date}</p>`;

  writeFile(`./individuales/${dato.id}.html`, html);
}