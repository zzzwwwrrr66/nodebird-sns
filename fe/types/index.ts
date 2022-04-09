export interface IUser {
  isLogin: false;
  info: {
    email: string;
    name: string;
  } | null;
}

export interface IFollowData {
  userId : string,
  followList: {nickname: string}[],
  followingList: {nickname: string}[]
}