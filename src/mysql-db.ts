import mysql from "mysql2/promise";
import {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DB,
} from "$env/static/private";
import type { Customer } from "$models/Customer";

const connection = await mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
});

export const register = async (customer: Customer): Promise<void> => {
  try {
    connection.query(
      "INSERT INTO customers (email, password, first_name, last_name, birth_date, gender, phone, address) VALUES ('y.e@g.c', 'abc', 'youssef', 'errais', '2000-03-19', 1, '23512089', '18 t');"
    );
  } catch {
    console.log("failed");
  }
};

export const getPosts = async (): Promise<void> => {
  console.log(
    (await connection.query("SELECT * FROM customers WHERE email = '@g.c'"))[0]
  );
};
