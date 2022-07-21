import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.list();
  }
}

export { ListUsersUseCase };
