import { inject, injectable } from "tsyringe";

import { IListUsersResponse } from "../../dtos/IListUsersResponse";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(
    page: number,
    per_page: number
  ): Promise<IListUsersResponse> {
    return this.userRepository.list(page, per_page);
  }
}

export { ListUsersUseCase };
