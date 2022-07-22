import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  avatar: string;

  protected avatar_url: string;

  @AfterLoad()
  getAvatarUrl() {
    if (this.avatar) {
      this.avatar_url = `http://localhost:3333/avatar/${this.avatar}`;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
