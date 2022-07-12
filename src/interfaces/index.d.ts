export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  phoneNumber: string;
}

export interface IGarage {
  id: number;
  name: string;
}

export interface IService {
  id: number;
  name: string;
  description: string;
  price: string;
  time: string;
  garage: { id: number };
}

export interface IReservation {
  id: number;
  r_date: date;
  r_time: time;
  user: { id: number };
  service: { id: number };
}

export interface IOptionGroup {
  value: string;
  label: string | React.ReactNode;
}

export interface IOptions {
  label: string | React.ReactNode;
  options: IOptionGroup[];
}
