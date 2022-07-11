export interface ICategory {
  id: string;
  title: string;
}
export interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  phoneNumber: string;
}

export interface IGarage {
  id: string;
  name: string;
}
