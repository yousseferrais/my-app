import type { Agent } from "$models/Agent";
import type { ServerLoad } from "@sveltejs/kit";

export interface PageOutputData {
  agent: Agent;
  password: string;
}

export interface PageParams {
  id: string;
}
export type PageServerLoad = ServerLoad<PageParams, null, PageOutputData>;
