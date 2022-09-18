export interface Agent {
  email: string;
  firstname: string;
  gender: "m" | "f" | null;
  governorate: string;
  lastname: string;
  phone: string;
  profession: string;
}

export const agentBuilder = (data: Partial<Agent>): Agent => ({
  email: "",
  firstname: "",
  gender: null,
  governorate: "",
  lastname: "",
  phone: "",
  profession: "",
  ...data,
});
