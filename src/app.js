import "dotenv/config";

// import medicament routes
import medicamentRoutes from "./routes/medicament.routes.js";
// import userRoutes
import userRoutes from "./routes/user.routes.js";

import express from "express";
import cors from "cors";
import { dbConnect } from "./database/mysql.js";

// create express app
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", medicamentRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

// put server to listen
app.listen(PORT, () => console.log("Server running on port: " + PORT));
//connect to DB
dbConnect();
