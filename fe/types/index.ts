export interface IUser {
  isLogin: false;
  info: {
    email: string;
    name: string;
  } | null;
}