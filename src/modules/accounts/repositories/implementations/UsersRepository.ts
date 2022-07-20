import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    email,
    first_name,
    last_name,
    avatar_url,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      first_name,
      last_name,
      avatar_url,
    });

    await this.repository.save(user);
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }
}

export { UsersRepository };
