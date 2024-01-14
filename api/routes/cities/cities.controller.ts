import { Request, Response, NextFunction } from 'express';

import { cittiesLogger as log } from '../../server/winstonLog';
import axios from 'axios';

const getTrails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const options = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
      headers: {
        'X-RapidAPI-Key': '9dab233126mshb4192ee6a836697p1799f1jsn974963a92fe2',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    log.error(`Error retrieving response, error: ${error}`)
    next(error);
  }
};

export default getTrails;
