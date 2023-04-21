export class Curiosity {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    full_name:string;
  };
  image: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };

  constructor(
    id: number,
    sol: number,
    camera: { id: number; name: string; full_name: string;},
    image: string,
    earth_date: string,
    rover: {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    }
  ) {
    this.id = id;
    this.sol = sol;
    this.camera = camera;
    this.image = image;
    this.earth_date = earth_date;
    this.rover = rover;
  }
}
