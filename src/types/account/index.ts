export interface LoginForm {
  account: string;
  password: string;
}

export interface UserInfo {
  name: string;
  avatar: string;
  roles: string[];
}

export interface LoginRes {
  token: string;
  userInfo: UserInfo;
}
