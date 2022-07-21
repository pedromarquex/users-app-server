import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    try {
      await deleteUserUseCase.execute(id);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(204).send();
  }
}

export { DeleteUserController };
