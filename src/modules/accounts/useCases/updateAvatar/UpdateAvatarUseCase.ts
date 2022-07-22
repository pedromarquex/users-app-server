import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
  user_id: string;
  avatar?: string;
}

@injectable()
class UpdateAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersRepository
  ) {}
  public async execute({ user_id, avatar }: IRequest): Promise<void> {
    const user = await this.usersRespository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    if (user?.avatar) {
      await deleteFile(`./tmp/avatar/${user?.avatar}`);
    }

    if (avatar) {
      await this.usersRespository.update({ id: user_id, avatar });
    }
  }
}

export { UpdateAvatarUseCase };
