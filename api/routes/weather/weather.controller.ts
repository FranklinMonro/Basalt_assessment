import { Request, Response, NextFunction } from 'express';

import { trailsLogger as log } from '../../server/winstonLog';
import axios from 'axios';

const getWeather = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const { city } = req.query;
    const options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/${city}`,
      headers: {
        'X-RapidAPI-Key': '9dab233126mshb4192ee6a836697p1799f1jsn974963a92fe2',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.status(200).send(response.data);
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

export default getWeather;