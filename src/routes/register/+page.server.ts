import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { register } from "$src/mysql-db";
import type { Customer } from "$models/Customer";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const address = data.get("address");
    const email = data.get("email");
    const firstname = data.get("firstname");
    const gender = data.get("gender");
    const lastname = data.get("lastname");
    const password = data.get("password");
    const passwordConfirmation = data.get("passwordConfirmation");
    const phone = data.get("phone");

    if (!password || passwordConfirmation !== password)
      return invalid(400, {
        unmatchingPassword: true,
      });

    const customer: Customer = {
      address: address ? address.toString() : "",
      email: email ? email.toString() : "",
      firstname: firstname ? firstname.toString() : "",
      gender: gender == "m" || gender == "f" ? gender : null,
      lastname: lastname ? lastname.toString() : "",
      phone: phone ? phone.toString() : "",
    };

    if (await register(customer, password.toString()))
      return invalid(400, {
        usedEmail: true,
      });
    throw redirect(303, "../");
  },
};
