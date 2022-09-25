import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { registerAgent } from "$lib/mysql-db";
import type { Agent } from "$models/Agent";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const email = data.get("email");
    const firstname = data.get("firstname");
    const gender = data.get("gender");
    const governorate = data.get("governorate");
    const lastname = data.get("lastname");
    const password = data.get("password");
    const passwordConfirmation = data.get("passwordConfirmation");
    const phone = data.get("phone");
    const profession = data.get("profession");
    if (!password || passwordConfirmation !== password)
      return invalid(400, {
        unmatchingPassword: true,
      });

    const agent: Partial<Agent> = {
      email: email ? email.toString() : "",
      firstname: firstname ? firstname.toString() : "",
      gender: gender == "m" || gender == "f" ? gender : null,
      governorate: governorate ? governorate.toString() : "",
      lastname: lastname ? lastname.toString() : "",
      phone: phone ? phone.toString() : "",
      profession: profession ? profession.toString() : "",
    };

    if (await registerAgent(agent, password.toString()))
      return invalid(400, {
        usedEmail: true,
      });
    throw redirect(303, "../../");
  },
};
