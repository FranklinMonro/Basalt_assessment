import type { Sequelize } from "sequelize";
import { weather_city as _weather_city } from "./weather_city";
import type { weather_cityAttributes, weather_cityCreationAttributes } from "./weather_city";

export {
  _weather_city as weather_city,
};

export type {
  weather_cityAttributes,
  weather_cityCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const weather_city = _weather_city.initModel(sequelize);


  return {
    weather_city: weather_city,
  };
}
