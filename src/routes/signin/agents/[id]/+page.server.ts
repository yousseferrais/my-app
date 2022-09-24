import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getAgent, getAgentPassword } from "$lib/mysql-db";

export const load: PageServerLoad = async (event) => {
  const id = event.params.id;
  const agent = await getAgent(id);
  const password = await getAgentPassword(id);
  if (agent && password)
    return {
      agent,
      password,
    };

  throw error(404, "Not found");
};
