export interface IUser {
  id: string;
  displayName: string;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

export interface ICreateUser {
  name: string;
  lastname: string;
  email: string;
  terms: boolean;
  phoneNumber: string;
  countryCode: string;
  password: string;
}