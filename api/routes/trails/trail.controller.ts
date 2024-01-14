import { Request, Response, NextFunction } from 'express';

import { trailsLogger as log } from '../../server/winstonLog';
import axios from 'axios';

const getTrails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const { latitude, longitude } = req.body;
    const options = {
      method: 'GET',
      url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
      params: {
        lat: latitude,
        lon: longitude,
      },
      headers: {
        'X-RapidAPI-Key': '9dab233126mshb4192ee6a836697p1799f1jsn974963a92fe2',
        'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
      }
    };

    
    const response = await axios.request(options);
    res.status(200).send(response);
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

export default getTrails;
