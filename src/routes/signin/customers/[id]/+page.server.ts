import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getCustomer, getCustomerPassword } from "$lib/mysql-db";

export const load: PageServerLoad = async (event) => {
  const id = event.params.id;
  const customer = await getCustomer(id);
  const password = await getCustomerPassword(id);
  if (customer && password)
    return {
      customer,
      password,
    };

  throw error(404, "Not found");
};
