// import sequelize connection
import { sequelize } from "../database/mysql.js";
// import DataTypes from sequelize
import { DataTypes } from "sequelize";

const Medicament = sequelize.define(
  "medicaments",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    laboratory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Medicament;
