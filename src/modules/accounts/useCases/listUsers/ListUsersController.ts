import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  public async handle(_: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(ListUsersUseCase);

    const users = await createUserUseCase.execute();

    return response.json(users);
  }
}

export { ListUsersController };
