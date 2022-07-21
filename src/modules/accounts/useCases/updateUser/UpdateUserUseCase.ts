import { inject, injectable } from "tsyringe";

import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(userData: IUpdateUserDTO): Promise<User | undefined> {
    return this.usersRepository.update(userData);
  }
}

export { UpdateUserUseCase };
