import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowUserUseCase } from "./ShowUserUseCase";

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showUserUseCase = container.resolve(ShowUserUseCase);
    const { id } = request.params;

    try {
      const user = await showUserUseCase.execute(id);

      return response.json(user);
    } catch (error: any) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { ShowUserController };
