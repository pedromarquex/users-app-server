import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";
import { ShowUserController } from "../modules/accounts/useCases/showUser/ShowUserController";
import { UpdateAvatarController } from "../modules/accounts/useCases/updateAvatar/UpdateAvatarController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const showUserController = new ShowUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const updateAvatarController = new UpdateAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:id", showUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);

usersRoutes.put(
  "/:id/avatar",
  uploadAvatar.single("avatar"),
  updateAvatarController.handle
);

export { usersRoutes };
