/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/naming-convention */
import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface trailsAttributes {
  id: string;
  city: string;
  trail: string;
  ride: boolean;
  date_riden?: string;
}

export type trailsPk = "id";
export type trailsId = trails[trailsPk];
export type trailsOptionalAttributes = "date_riden";
export type trailsCreationAttributes = Optional<trailsAttributes, trailsOptionalAttributes>;

export class trails extends Model<trailsAttributes, trailsCreationAttributes> implements trailsAttributes {
  id!: string;
  city!: string;
  trail!: string;
  ride!: boolean;
  date_riden?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof trails {
    return trails.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    trail: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    ride: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_riden: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trails_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
