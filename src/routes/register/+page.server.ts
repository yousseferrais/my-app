import type { RequestEvent } from "@sveltejs/kit";
import { register } from "$src/mysql-db";
import type { Customer } from "$models/Customer";
export const actions = {
  default: async (event: RequestEvent) => {
    try {
      const data = await event.request.formData();

      const address = data.get("address");
      const birthDate = data.get("birthDate");
      const email = data.get("email");
      const firstName = data.get("firstName");
      const gender = data.get("gender");
      const lastName = data.get("lastName");
      const password = data.get("password");
      const phone = data.get("phone");

      const customer: Customer = {
        address: typeof address === "string" ? address : "",
        birthDate: typeof birthDate === "string" ? birthDate : "",
        email: typeof email === "string" ? email : "",
        firstName: typeof firstName === "string" ? firstName : "",
        gender: typeof gender === "string" ? gender : "",
        lastName: typeof lastName === "string" ? lastName : "",
        password: typeof password === "string" ? password : "",
        phone: typeof phone === "string" ? phone : "",
      };
      console.log(customer);
      register(customer);
    } catch {
      console.log("failed2");
    }
    // const query =
    //   "INSERT INTO customers (email, password, first_name, last_name, birth_date, gender, phone, address) VALUES ('" +
    //   customer.email +
    //   "', '" +
    //   customer.password +
    //   "', '" +
    //   customer.firstName +
    //   "', '" +
    //   customer.lastName +
    //   "', '" +
    //   customer.birthDate +
    //   "', '" +
    //   customer.gender +
    //   "', '" +
    //   customer.phone +
    //   "', '" +
    //   customer.address +
    //   "')";
    // const results = await connection.query(query);
    // console.log(results);
    // return { success: true };
  },
};
