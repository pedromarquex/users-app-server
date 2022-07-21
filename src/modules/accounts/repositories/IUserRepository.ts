import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  update(userData: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
