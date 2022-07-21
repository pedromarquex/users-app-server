import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserUseCase {
  public constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}

export { DeleteUserUseCase };
