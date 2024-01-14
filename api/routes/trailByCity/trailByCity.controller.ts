import { Request, Response, NextFunction } from 'express';

import { trailByCityLogger as log } from '../../server/winstonLog';


const getTrailByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const postTrailByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const putTrailByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const deleteTrailByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

export {
  getTrailByCity,
  postTrailByCity,
  putTrailByCity,
  deleteTrailByCity
}