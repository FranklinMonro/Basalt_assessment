import express from 'express';
import getTrails from '../cities/cities.controller';

class TrailsRouter {
  public router = express.Router();

  constructor() {
    this.router.get('', getTrails);
  }
}

export default new TrailsRouter().router;