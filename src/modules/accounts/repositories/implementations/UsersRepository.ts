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
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      first_name,
      last_name,
    });

    await this.repository.save(user);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  async update({ id, ...userData }: IUpdateUserDTO): Promise<User | undefined> {
    const user = this.repository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.repository.update(id, userData);

    return this.repository.findOne(id);
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
