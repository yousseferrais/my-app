export interface Customer {
  address: string;
  birthDate: string | null;
  email: string;
  firstName: string;
  gender: string | null;
  lastName: string;
  password: string;
  phone: string | null;
}

export const customerBuilder = (data: Partial<Customer>): Customer => ({
  address: "",
  birthDate: "",
  email: "",
  firstName: "",
  gender: "",
  lastName: "",
  password: "",
  phone: "",
  ...data,
});
