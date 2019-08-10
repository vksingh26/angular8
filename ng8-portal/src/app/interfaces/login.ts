export interface IRegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
export interface ILoginCredentials {
  username: string;
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
