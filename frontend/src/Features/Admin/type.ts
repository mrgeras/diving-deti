export type Admin = {
  login: string;
  password: string;
};

export type AuthState = {
  admin: Admin | undefined;
  error: string | undefined;
};
