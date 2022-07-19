import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
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
  avatar_url: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
