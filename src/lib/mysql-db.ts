import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DB,
} from "$env/static/private";
import type { Customer } from "$models/Customer";
import type { Agent } from "$models/Agent";

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  dateStrings: true,
});

export const registerAgent = async (
  agent: Agent,
  password: string
): Promise<boolean> => {
  let err = false;
  await connection
    .promise()
    .query(
      "SELECT id FROM agents WHERE email = ? UNION SELECT id FROM customers WHERE email = ?",
      [agent.email, agent.email]
    )
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length) err = true;
      else {
        connection.query("INSERT INTO agents SET ?", {
          password: password,
          ...agent,
        });
      }
    })
    .catch(console.log);
  return err;
};
export const registerCustomer = async (
  customer: Customer,
  password: string
): Promise<boolean> => {
  let err = false;
  await connection
    .promise()
    .query(
      "SELECT id FROM agents WHERE email = ? UNION SELECT id FROM customers WHERE email = ?",
      [customer.email, customer.email]
    )
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length) err = true;
      else {
        connection.query("INSERT INTO customers SET ?", {
          password: password,
          ...customer,
        });
      }
    })
    .catch(console.log);
  return err;
};
export const getAgentId = async (email: string): Promise<string | null> => {
  console.log("getAgentId started");
  let id: string | null = null;
  await connection
    .promise()
    .query("SELECT id FROM agents WHERE email = ?", email)
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length && "id" in rows[0]) {
        id = rows[0].id;
      }
    })
    .catch(console.log);
  console.log("getAgentId succeeded");
  return id;
};
export const getCustomerId = async (email: string): Promise<string | null> => {
  console.log("getCustomerId started");
  let id: string | null = null;
  await connection
    .promise()
    .query("SELECT id FROM customers WHERE email = ?", email)
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length && "id" in rows[0]) {
        id = rows[0].id;
      }
    })
    .catch(console.log);
  console.log("getCustomerId succeeded");
  return id;
};

export const getAgent = async (id: string): Promise<null | Agent> => {
  let user: null | Agent = null;
  await connection
    .promise()
    .query(
      "SELECT email, firstname, governorate, gender, lastname, phone, profession FROM agents WHERE id = ?",
      id
    )
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length) {
        user = rows[0] as Agent;
      }
    })
    .catch(console.log);
  console.log(user);
  return user;
};
export const getCustomer = async (id: string): Promise<null | Customer> => {
  let user: null | Customer = null;
  await connection
    .promise()
    .query(
      "SELECT address, email, firstname, gender, lastname, phone FROM customers WHERE id = ?",
      id
    )
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length) {
        user = rows[0] as Customer;
      }
    })
    .catch(console.log);
  console.log(user);
  return user;
};

export const getAgentPassword = async (id: string): Promise<null | string> => {
  let password: null | string = null;
  await connection
    .promise()
    .query("SELECT password FROM agents WHERE id = ?", id)
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length && "password" in rows[0]) {
        password = rows[0].password;
      }
    })
    .catch(console.log);
  console.log(password);
  return password;
};
export const getCustomerPassword = async (
  id: string
): Promise<null | string> => {
  let password: null | string = null;
  await connection
    .promise()
    .query("SELECT password FROM customers WHERE id = ?", id)
    .then(([rows]) => {
      if (rows.constructor === Array && rows.length && "password" in rows[0]) {
        password = rows[0].password;
      }
    })
    .catch(console.log);
  console.log(password);
  return password;
};
