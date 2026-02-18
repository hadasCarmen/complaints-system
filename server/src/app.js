import express from "express";
import dotenv from "dotenv";
import complaintsRoutes from "./routes/complaints.routes.js";
// import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "server running" });
// });
app.use("/api/complaints", complaintsRoutes);
// app.use(errorHandler);

export default app;
