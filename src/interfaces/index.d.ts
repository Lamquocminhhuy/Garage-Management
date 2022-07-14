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
  image: [
    {
      path: string;
      filename: string;
      mimetype: string;
    }
  ];
}

export interface ILocalFile {
  id: number;
  filename: string;
  path: string;
  mimetype: string;
}

export interface IReservation {
  id: number;
  r_date: date;
  r_time: time;
  user: { id: number };
  service: { id: number };
  status: { id: number };
}

export interface IStatus {
  id: number;
  status: string;
}
export interface IOptionGroup {
  value: string;
  label: string | React.ReactNode;
}

export interface IOptions {
  label: string | React.ReactNode;
  options: IOptionGroup[];
}
