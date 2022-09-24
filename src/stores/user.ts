import type { Agent } from "$models/Agent";
import type { Customer } from "$models/Customer";
import { writable, type Writable } from "svelte/store";

export const user: Writable<null | Agent | Customer> = writable(null);
