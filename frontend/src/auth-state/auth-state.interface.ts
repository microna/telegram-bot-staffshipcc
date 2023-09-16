export interface IUser {
  id: string;
  email: string;
}

export interface IAuthState {
  user?: IUser;
  token?: string;
  isAuthResolved: boolean;
}
