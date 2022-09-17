export interface Customer {
  address: string;
  birthdate: string | null;
  email: string;
  firstname: string;
  gender: string | null;
  governorate: string;
  lastname: string;
  password: string;
  phone: string;
}

export const customerBuilder = (data: Partial<Customer>): Customer => ({
  address: "",
  birthdate: "",
  email: "",
  firstname: "",
  gender: "",
  governorate: "",
  lastname: "",
  password: "",
  phone: "",
  ...data,
});
