import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(ListUsersUseCase);
    const page = request.query.page?.toString() || "1";
    const per_page = request.query.per_page?.toString() || "6";
    const users = await createUserUseCase.execute(
      Number(page),
      Number(per_page)
    );

    return response.json(users);
  }
}

export { ListUsersController };
