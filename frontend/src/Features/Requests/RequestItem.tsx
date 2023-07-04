import React from 'react';
import { Request } from './types/request';

function RequestItem({ request }: { request: Request }): JSX.Element {
  return (
    <div>
      <h3>{request.userName}</h3>
      <p>{request.tel}</p>
      <p>{request.email}</p>
    </div>
  );
}

export default RequestItem;
