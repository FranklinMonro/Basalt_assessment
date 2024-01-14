import express from 'express';

class TrailsRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/wordtype', getWordType);
  }
}

export default new TrailsRouter().router;