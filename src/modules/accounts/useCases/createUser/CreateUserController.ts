import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const { email, first_name, last_name } = request.body;

    try {
      await createUserUseCase.execute({ email, first_name, last_name });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(201).send();
  }
}

export { CreateUserController };
