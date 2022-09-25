import type { Customer } from "$models/Customer";
import type { Service } from "$models/Service";
export interface JobOffer extends Customer, Service {}
