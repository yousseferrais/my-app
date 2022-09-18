import type { Customer } from "$models/Customer";
import type { Agent } from "$models/Agent";
import { writable, type Writable } from "svelte/store";

export const user: Writable<null | Customer | Agent> = writable(null);
