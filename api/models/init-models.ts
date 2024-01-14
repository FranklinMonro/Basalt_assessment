import type { Sequelize } from "sequelize";
import { trails as _trails } from "./trails";
import type { trailsAttributes, trailsCreationAttributes } from "./trails";

export {
  _trails as trails,
};

export type {
  trailsAttributes,
  trailsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const trails = _trails.initModel(sequelize);


  return {
    trails: trails,
  };
}
