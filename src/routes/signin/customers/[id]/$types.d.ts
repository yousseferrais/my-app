import type { Customer } from "$models/Customer";
import type { ServerLoad } from "@sveltejs/kit";

export interface PageOutputData {
  customer: Customer;
  password: string;
}

export interface PageParams {
  id: string;
}
export type PageServerLoad = ServerLoad<PageParams, null, PageOutputData>;
