import { Curiosity } from "./Curiosity.js";
/* import { loadPhotos } from "./photos.js"; */

const head = `<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>`;

const renderPhotos = (photos: Array<Curiosity>) => {
  let html = "";
  for (const photo of photos) {
    html += `      
        <div class="item">
          <h3 class="title">tomada con la cámara ${photo.camera.name}</h3>     
          <img src=" ${photo.image} "/>
          <a href="./individuales/${photo.id}.html" class="btn">Ver más detalles</a>    
        </div>    
    `;
  }
  return html;
};

export const render = (photos: Array<Curiosity>) => {
  return `
<!DOCTYPE html>
${head}
  <body>
    <h1 class="titulo">Imágenes tomadas desde el rover curiosity en el día 2 marciano de su llegada</h1>
    <main class="container">
      ${renderPhotos(photos)}
    </main>
  </body>
</html>`;
};

//const photos= await loadPhotos();
/* renderPhotos(photos); */