import React, { useEffect, useState } from 'react';
import RequestItem from './RequestItem';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { loadRequests } from '../../Redux/Reducers/RequestSlice';
import './RequestsList.css';

function RequestsList(): JSX.Element {
  const [tf, setTf] = useState(false);

  const { requests } = useAppSelector((store) => store.requests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRequests());
  }, []);

  return (
    <div className="alladmimpanel">
      <button className="obrabbutton" type="button" onClick={() => setTf(true)}>
        Обработанные
      </button>
      <button
        className="neobrabbutton"
        type="button"
        onClick={() => setTf(false)}
      >
        Необработанные
      </button>
      <div>
        {tf ? (
          <div className="obrab">
            {requests.map(
              (request) =>
                request.requestStatus && (
                  <RequestItem key={request.id} request={request} />
                )
            )}
          </div>
        ) : (
          <div className="neobrab">
            {requests.map(
              (request) =>
                !request.requestStatus && (
                  <RequestItem key={request.id} request={request} />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestsList;
