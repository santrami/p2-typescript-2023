import { writeFile} from "fs/promises";
import { render } from "./render.js";
import { loadPhotos } from "./photos.js";

const datos = await loadPhotos();
const html = render(datos);
await writeFile("photos.html", html);


