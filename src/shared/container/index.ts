import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUserRepository";

container.register<IUsersRepository>("UsersRepository", UsersRepository);
