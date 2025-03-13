export type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  is2Factor: boolean;
  password: string;
  // Optional
  id?: number;
  bio?: string;
};
