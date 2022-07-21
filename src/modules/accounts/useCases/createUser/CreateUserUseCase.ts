import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute({
    email,
    first_name,
    last_name,
  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }

    await this.userRepository.create({
      email,
      first_name,
      last_name,
    });
  }
}

export { CreateUserUseCase };
