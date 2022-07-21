import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class ShowUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return this.usersRepository.findById(id);
  }
}

export { ShowUserUseCase };
