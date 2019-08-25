export interface IRegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ILoginCredentials {
  email: string;
  password: string;
}
export interface IResetPassword {
  current_password?: string;
  new_password: string;
  token?: string;
}
export interface IChangePassword {
  current_password: string;
  new_password?: string;
}
