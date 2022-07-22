import { Connection, createConnection } from "typeorm";
import { v4 as uuid } from "uuid";

async function create() {
  const connection: Connection = await createConnection("default");

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User1', 'Tester', 'user1@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User2', 'Tester', 'user2@mail.com','now()', null)
    `
  );
  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User3', 'Tester', 'user3@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User4', 'Tester', 'user4@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User5', 'Tester', 'user5@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User6', 'Tester', 'user6@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User7', 'Tester', 'user7@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User8', 'Tester', 'user8@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User9', 'Tester', 'user9@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User10', 'Tester', 'user10@mail.com','now()', null)
    `
  );

  await connection.query(
    `INSERT INTO USERS(id, first_name, last_name, email, created_at, avatar )
      values('${uuid()}', 'User11', 'Tester', 'user11@mail.com','now()', null)
    `
  );

  await connection.close();
}

create().then(() => console.log("users created!"));
