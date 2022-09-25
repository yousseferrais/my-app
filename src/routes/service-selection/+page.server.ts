import { invalid, redirect, type RequestEvent } from "@sveltejs/kit";
import { postService } from "$lib/mysql-db";
import type { Service } from "$models/Service";

export const actions = {
  default: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const address = data.get("address");
    const clientId = data.get("clientId");
    const cost = data.get("cost");
    const date = data.get("date");
    const governorate = data.get("governorate");
    const type = data.get("type");

    if (date && new Date(date.toString()).getTime() < new Date().getTime())
      return invalid(400, { datePassed: true });
    const service: Partial<Service> = {
      address: address ? address.toString() : "",
      customerId: Number(clientId) ? Number(clientId) : 0,
      cost: Number(cost) ? Number(cost) : 0,
      date: date ? date.toString() : "1000-01-01",
      governorate: governorate ? governorate.toString() : "",
      type: type ? type.toString() : "",
    };
    await postService(service);
    throw redirect(303, "../service-requests/" + clientId);
  },
};
