import { User } from "../entities/User";

interface IListUsersResponse {
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  users: User[];
}

export { IListUsersResponse };
