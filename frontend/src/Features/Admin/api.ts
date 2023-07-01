import { Admin, AdminWithOutId } from './type';

export const authLogFetch = async (admin: AdminWithOutId): Promise<Admin> => {
  const res = await fetch('/api/auth/authorization', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(admin),
  });
  return res.json();
};

export const authCheckUserFetch = async (): Promise<Admin> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const logOutFetch = async (): Promise<void> => {
  await fetch('/api/auth/logout');
};
