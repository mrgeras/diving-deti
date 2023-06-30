import { Admin } from './type';

const authLogFetch = async (admin: Admin): Promise<Admin> => {
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
