export interface Customer {
  address: string;
  email: string;
  firstname: string;
  gender: "m" | "f" | null;
  id: number;
  lastname: string;
  phone: string;
}

export const customerBuilder = (data: Partial<Customer>): Customer => ({
  address: "",
  email: "",
  firstname: "",
  gender: null,
  id: 0,
  lastname: "",
  phone: "",
  ...data,
});
