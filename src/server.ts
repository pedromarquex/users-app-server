import "reflect-metadata";
import cors from "cors";
import express from "express";

import "./database";
import "./shared/container";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3333, () => {
  console.log("Server started at http://localhost:3333");
});
