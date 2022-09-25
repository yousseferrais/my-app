import type { PageServerLoad } from "./$types";
import { error, type RequestEvent } from "@sveltejs/kit";
import { deleteService, getServices } from "$lib/mysql-db";

export const load: PageServerLoad = async (event) => {
  const id = event.params.id;
  if (Number(id)) {
    const services = await getServices(id);
    return {
      services,
    };
  }
  throw error(404, "Not found");
};

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const id = data.get("id");

    if (id) await deleteService(id.toString());
  },
};
