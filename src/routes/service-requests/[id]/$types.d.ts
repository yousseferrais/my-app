import type { Service } from "$models/Service";
import type { ServerLoad } from "@sveltejs/kit";

export interface PageOutputData {
  services: Service[];
}

export interface PageParams {
  id: string;
}
export type PageServerLoad = ServerLoad<PageParams, null, PageOutputData>;
