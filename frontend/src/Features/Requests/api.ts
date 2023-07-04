import { RequestWithOutId } from './types/request';

const addRequest = async (request: RequestWithOutId): Promise<Request> => {
  const res = await fetch('/api/admin/requests', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  return res.json();
};

export default addRequest;
