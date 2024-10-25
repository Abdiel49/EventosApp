export interface IUser {
  id: string;
  displayName: string;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

export type CreateUserType = Omit<IUser, 'id'> & { password: string }

export type LoginEmailType = Pick<CreateUserType, "email" | 'password'>

export interface ICreateUser {
  name: string;
  lastname: string;
  email: string;
  terms: boolean;
  phoneNumber: string;
  countryCode: string;
  password: string;
}