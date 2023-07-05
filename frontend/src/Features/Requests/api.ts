import { ObjRequest, Request, RequestWithOutId } from './types/request';

export const loadRequestsFetch = async (): Promise<Request[]> => {
  const res = await fetch('/api/admin/requests');
  return res.json();
};

export const loadRequestsFetch2 = async (): Promise<Request[]> => {
  const res = await fetch('/api/admin/requests/true');
  return res.json();
};

export const addRequestFetch = async (
  request: RequestWithOutId
): Promise<Request> => {
  const res = await fetch('/api/admin/requests', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  return res.json();
};

export const updateRequestsFetch = async (
  value: ObjRequest
): Promise<Request> => {
  const res = await fetch(`/api/admin/requests/${value.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      requestStatus: value.requestStatus,
    }),
  });

  return res.json();
};
