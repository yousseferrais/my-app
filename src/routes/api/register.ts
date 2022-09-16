import { mysqlConnection } from "$src/mysql-db";
import type { Customer } from "$models/Customer";

export async function register(customer: Customer) {
  const query =
    "INSERT INTO customers (email, password, first_name, last_name, birth_date, gender, phone, address) VALUES ('" +
    customer.email +
    "', '" +
    customer.password +
    "', '" +
    customer.firstName +
    "', '" +
    customer.lastName +
    "', '" +
    customer.birthDate +
    "', '" +
    customer.gender +
    "', '" +
    customer.phone +
    "', '" +
    customer.address +
    "')";
  const results = await mysqlConnection
    .query(query)
    .then(function ([rows, fields]) {
      console.log(rows);
      return rows;
    });

  return {
    body: results,
  };
}
