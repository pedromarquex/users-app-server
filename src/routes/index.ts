import express, { Router } from "express";
import { resolve } from "path";

import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(
  "/avatar",
  express.static(resolve(__dirname, "..", "..", "tmp", "avatar"))
);

export { router };
