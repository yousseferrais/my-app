import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { login } from "$src/mysql-db";
import { user } from "$stores/user";
import type { Customer } from "$models/Customer";
import type { Agent } from "$models/Agent";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const email = data.get("email");
    const password = data.get("password");
    let customer: null | Customer | Agent = null;
    if (email && password) {
      customer = await login(email.toString(), password.toString());
    }
    if (customer == null) return invalid(400, { incorrectCredentials: true });
    user.set(customer);
    user.subscribe((value) => {
      console.log(value);
    });
  },
};
