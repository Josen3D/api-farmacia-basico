import { Sequelize } from "sequelize";

// env variables to use in DB connection
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

// create new Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});

//creates the mysql DB connection
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL");
  } catch (error) {
    console.log("MySQL connection error: " + error);
  }
};

export { dbConnect, sequelize };
