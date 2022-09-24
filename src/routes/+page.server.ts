import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { getAgentId, getCustomerId } from "$lib/mysql-db";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();
    const email = data.get("email");
    if (email) {
      let id: null | string = await getAgentId(email.toString());
      if (id) throw redirect(303, "/signin/agents/" + id);
      id = await getCustomerId(email.toString());
      if (id) throw redirect(303, "/signin/customers/" + id);
    }
    return invalid(400, {
      unexistentEmail: true,
    });
  },
};
