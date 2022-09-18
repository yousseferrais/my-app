export interface Customer {
  address: string;
  email: string;
  firstname: string;
  gender: "m" | "f" | null;
  lastname: string;
  phone: string;
}

export const customerBuilder = (data: Partial<Customer>): Customer => ({
  address: "",
  email: "",
  firstname: "",
  gender: null,
  lastname: "",
  phone: "",
  ...data,
});
