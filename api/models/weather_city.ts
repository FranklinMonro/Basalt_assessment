/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable @typescript-eslint/naming-convention */
import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface weather_cityAttributes {
  id: string;
  city?: string;
  main?: string;
  description?: string;
  date?: string;
  active?: boolean;
}

export type weather_cityPk = "id";
export type weather_cityId = weather_city[weather_cityPk];
export type weather_cityOptionalAttributes = "city" | "main" | "description" | "date" | "active";
export type weather_cityCreationAttributes = Optional<weather_cityAttributes, weather_cityOptionalAttributes>;

export class weather_city extends Model<weather_cityAttributes, weather_cityCreationAttributes> implements weather_cityAttributes {
  id!: string;
  city?: string;
  main?: string;
  description?: string;
  date?: string;
  active?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof weather_city {
    return weather_city.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    main: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    description: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'weather_city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "weather_city_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
