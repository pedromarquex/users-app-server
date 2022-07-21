import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
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

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async update({ id, ...userData }: IUpdateUserDTO): Promise<void> {
    const user = this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.repository.update(id, userData);
  }

  async delete(id: string): Promise<void> {
    const user = this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.repository.delete(id);
  }

  async list(): Promise<User[]> {
    return this.repository.find();
  }
}

export { UsersRepository };
