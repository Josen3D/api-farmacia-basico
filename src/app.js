import "dotenv/config";

// import medicament routes
import medicamentRoutes from "./routes/medicament.routes.js";
import express from "express";
import cors from "cors";

// create express app
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", medicamentRoutes);

const PORT = process.env.PORT || 3000;

// put server to listen
app.listen(PORT, () => console.log("Server running on port: " + PORT));
