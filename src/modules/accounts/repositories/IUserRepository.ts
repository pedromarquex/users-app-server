import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IListUsersResponse } from "../dtos/IListUsersResponse";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  list(page: number, per_page: number): Promise<IListUsersResponse>;
  update(userData: IUpdateUserDTO): Promise<User | undefined>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
