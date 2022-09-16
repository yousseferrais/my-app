import type { PageServerLoad } from "./$types";
import { getPosts } from "$src/mysql-db";

export const load: PageServerLoad = async () => {
  try {
    getPosts();
  } catch {
    console.log("failed2");
  }
};
