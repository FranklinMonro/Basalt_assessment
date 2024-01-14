import express from 'express';
import { 
    getTrailByCity, 
    postTrailByCity,
    putTrailByCity,
    deleteTrailByCity
} from './trailByCity.controller';

class TrailByCityRouter {
  public router = express.Router();

  constructor() {
    this.router.get('', getTrailByCity);

    this.router.post('', postTrailByCity);

    this.router.put('', putTrailByCity);

    this.router.delete('', deleteTrailByCity);
  }
}

export default new TrailByCityRouter().router;