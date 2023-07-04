import React, { useEffect } from 'react';
import RequestItem from './RequestItem';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { loadRequests } from '../../Redux/Reducers/RequestSlice';

function RequestsList(): JSX.Element {
  const { requests } = useAppSelector((store) => store.requests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRequests());
  }, []);

  return (
    <div>
      {requests.map((request) => (
        <RequestItem key={request.id} request={request} />
      ))}
    </div>
  );
}

export default RequestsList;
