import React from 'react';
import { Request } from './types/request';
import { useAppDispatch } from '../../Redux/store';
import { updateRequests } from '../../Redux/Reducers/RequestSlice';
import './RequestItem.css';

function RequestItem({ request }: { request: Request }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleUpdate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    dispatch(
      updateRequests({ id: request.id, requestStatus: e.target.checked })
    );
  };

  return (
    <div className="item">
      <h3>Имя: {request.userName}</h3>
      <p>Курс: {request.Course?.courseName}</p>
      <p>Телефон: {request.tel}</p>
      <p>Почта: {request.email}</p>
      <label>
        Статус:{' '}
        <input
          required
          type="checkbox"
          checked={request.requestStatus}
          onChange={onHandleUpdate}
        />
      </label>
      {/* <button type="button">Обработано</button> */}
    </div>
  );
}

export default RequestItem;
