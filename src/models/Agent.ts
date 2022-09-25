export interface Agent {
  email: string;
  firstname: string;
  gender: "m" | "f" | null;
  governorate: string;
  id: number;
  lastname: string;
  phone: string;
  profession: string;
}

export const agentBuilder = (data: Partial<Agent>): Agent => ({
  email: "",
  firstname: "",
  gender: null,
  governorate: "",
  id: 0,
  lastname: "",
  phone: "",
  profession: "",
  ...data,
});
