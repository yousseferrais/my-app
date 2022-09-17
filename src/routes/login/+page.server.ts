import type { RequestEvent } from "@sveltejs/kit";
import { login } from "$src/mysql-db";
import type { Customer } from "$models/Customer";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const email = data.get("email");
    const password = data.get("password");
    let customer: Customer | null = null;
    if (email && password) {
      customer = await login(email.toString(), password.toString());
    }
    if (customer) console.log(customer);
  },
};
