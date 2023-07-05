import React, { useEffect, useState } from 'react';
import RequestItem from './RequestItem';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { loadRequests } from '../../Redux/Reducers/RequestSlice';

function RequestsList(): JSX.Element {
  const [tf, setTf] = useState(false);

  const { requests } = useAppSelector((store) => store.requests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRequests());
  }, []);

  return (
    <div>
      <button type="button" onClick={() => setTf(true)}>
        Обработанные
      </button>
      <button type="button" onClick={() => setTf(false)}>
        Необработанные
      </button>
      {tf ? (
        <div>
          {requests.map(
            (request) =>
              request.requestStatus && (
                <RequestItem key={request.id} request={request} />
              )
          )}
        </div>
      ) : (
        <div>
          {requests.map(
            (request) =>
              !request.requestStatus && (
                <RequestItem key={request.id} request={request} />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default RequestsList;
