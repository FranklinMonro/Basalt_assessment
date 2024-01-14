/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { SEQUILIZE_NEW } from '../../server/config';
import { initModels } from '../../models/init-models';

import { trailByCityLogger as log } from '../../server/winstonLog';

const { weather_city } = initModels(SEQUILIZE_NEW);

const getWeatherByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const postWeatherByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const putWeatherByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

const deleteWeatherByCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
      
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

export {
  getWeatherByCity,
  postWeatherByCity,
  putWeatherByCity,
  deleteWeatherByCity
}