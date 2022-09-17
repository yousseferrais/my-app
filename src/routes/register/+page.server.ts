import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { register } from "$src/mysql-db";
import type { Customer } from "$models/Customer";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const address = data.get("address");
    const birthdate = data.get("birthdate");
    const email = data.get("email");
    const firstname = data.get("firstname");
    const gender = data.get("gender");
    const governorate = data.get("governorate");
    const lastname = data.get("lastname");
    const password = data.get("password");
    const passwordConfirmation = data.get("passwordConfirmation");
    const phone = data.get("phone");

    if (passwordConfirmation !== password)
      return invalid(400, {
        address,
        birthdate,
        email,
        firstname,
        gender,
        governorate,
        lastname,
        phone,
        unmatchingPassword: true,
      });

    const customer: Customer = {
      address: address ? address.toString() : "",
      birthdate: birthdate ? birthdate.toString() : null,
      email: email ? email.toString() : "",
      firstname: firstname ? firstname.toString() : "",
      gender: gender ? gender.toString() : null,
      governorate: governorate ? governorate.toString() : "",
      lastname: lastname ? lastname.toString() : "",
      password: password ? password.toString() : "",
      phone: phone ? phone.toString() : "",
    };

    if (await register(customer))
      return invalid(400, {
        address,
        birthdate,
        firstname,
        gender,
        governorate,
        lastname,
        phone,
        usedEmail: true,
      });
    throw redirect(303, "../login");
  },
};
