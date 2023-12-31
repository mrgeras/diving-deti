export type Admin = {
    id: number;
    login: string;
    password: string;
    error: string | undefined;
};

export type AdminWithOutId = Omit<Admin, 'id'>;

export type AuthState = {
  admin: Admin | undefined;
  error: string | undefined;
};
