import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  update(userData: IUpdateUserDTO): Promise<User | undefined>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
