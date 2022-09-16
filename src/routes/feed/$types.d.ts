import type { Customer } from "$src/models/Customer";
import type { ServerLoad } from "@sveltejs/kit";

export interface PageOutputData {
  customer: Customer;
}
export type PageServerLoad = ServerLoad<null, null, PageOutputData>;
