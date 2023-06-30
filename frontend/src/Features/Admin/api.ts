import { Admin, AdminWithOutId } from './type';

const authLogFetch = async (admin: AdminWithOutId): Promise<Admin> => {
  const res = await fetch('/api/auth/authorization', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(admin),
  });
  return res.json();
};

export default authLogFetch;
