// import sequelize connection
import { sequelize } from "../database/mysql.js";
// import DataTypes from sequelize
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(["doctor", "nurse"]),
      defaultValue: "nurse",
    },
  },
  {
    timestamps: true,
  }
);

export default User;
