import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userData = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    try {
      const user = await updateUserUseCase.execute({
        ...userData,
        id,
      });

      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateUserController };
