import path from "path";
import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import homeRoutes from "./routes/homeRoutes.js";
import assetRouter from "./routes/assetRouter.js";
import apiRoutes from "./routes/apiRoutes.js";

const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

dotenv.config();

const app = express();

// Middleware
app.use(json());
app.use(cors());

// views
app.set("views", "./views");
app.set("view engine", "pug");

// static files
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/source", assetRouter);
}

// Use routes
app.use("/", homeRoutes);
app.use("/api/generate", apiRoutes);

export default app;
