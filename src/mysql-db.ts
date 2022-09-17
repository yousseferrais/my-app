import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DB,
} from "$env/static/private";
import type { Customer } from "$models/Customer";

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  dateStrings: true,
});

export const register = async (customer: Customer): Promise<boolean> => {
  let err = false;
  await connection
    .promise()
    .query("SELECT * FROM customers WHERE email = ?", customer.email)
    .then(([rows, fields]) => {
      if (rows.constructor === Array && rows.length) err = true;
      else {
        connection.query("INSERT INTO customers SET ?", customer);
      }
    })
    .catch(console.log);
  return err;
};
export const login = async (
  email: string,
  password: string
): Promise<Customer | null> => {
  let customer: Customer | null = null;
  await connection
    .promise()
    .query("SELECT * FROM customers WHERE email = ? AND password = ?", [
      email,
      password,
    ])
    .then(([rows, fields]) => {
      if (
        rows.constructor === Array &&
        rows.length &&
        "customer_id" in rows[0]
      ) {
        const { customer_id, ...test } = rows[0];
        customer = test as Customer;
      }
    })
    .catch(console.log);
  return customer;
};
