import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { Curiosity } from "./Curiosity.js";

export const loadPhotos = async () => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2&api_key=${process.env.API_TOKEN}`
  );
  const { photos } = (await response.json()) as { photos: any[] };
  const datos: Array<Curiosity> = [];

  for (const { id, sol, camera, img_src, earth_date, rover } of photos) {
    datos.push(new Curiosity(id, sol, camera, img_src, earth_date, rover));
  }
  return datos;
};