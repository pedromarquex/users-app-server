import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

class UpdateAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const avatar = request.file?.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateAvatarUseCase);

    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar,
    });

    return response.status(204).send();
  }
}

export { UpdateAvatarController };
