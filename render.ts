import { Curiosity } from "./Curiosity.js";
/* import { loadPhotos } from "./photos.js"; */

const head = (style:string) => `<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="${style}">
  <link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg">
</head>`;

const footer = `
<footer>
<img src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
<h3 class="footer-title">Tomado de la api de la Nasa</h3>
</footer>
`

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
${head('style.css')}
<body>
  <h1 class="titulo">Imágenes tomadas desde el rover curiosity en el día 2 marciano de su llegada</h1>
  <main class="container">
    ${renderPhotos(photos)}
  </main>
  ${footer}
</body>
</html>`;
};

const renderIndividual = (photo: Curiosity)=>{
  let html = `
  <header>${photo.rover.name} - ${photo.camera.full_name} - foto ${photo.id} del día solar 2 </header>
  <div class="row">
    <div class="column">
      <img src="${photo.image}" alt="${photo.rover.name} - ${photo.camera.full_name}">
    </div>
    <div class="column">
      <p>Fecha de la tierra: ${photo.earth_date}</p>
      <p>Rover Status: ${photo.rover.status}</p>
      <p>Launch Date: ${photo.rover.launch_date}</p>
      <p>Landing Date: ${photo.rover.landing_date}</p>
      <a href="../photos.html"> volver </a>
    </div>
  </div>
  `;
  return html;
}

export const generarIndividual = (photo:Curiosity) =>{
  return `<!DOCTYPE html>
${head('../style.css')}
<body>
  <main class="container-individual">
    ${renderIndividual(photo)}
  </main>
${footer}
</body>
</html>`;
}