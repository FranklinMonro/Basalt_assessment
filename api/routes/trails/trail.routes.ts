import express from 'express';
import getTrails from './trail.controller';

class TrailsRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/wordtype', getTrails);
  }
}

export default new TrailsRouter().router;