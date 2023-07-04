import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addRequest } from '../../Redux/Reducers/RequestSlice';
import { Course } from '../Courses/types/CoursesType';

function FormRequest({ course }: { course: Course }): JSX.Element {
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(course.id);
  const [requestStatus, setRequestStatus] = useState(false);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(addRequest({ courseId, requestStatus, userName, tel, email }));

    setUserName('');
    setTel('');
    setEmail('');
    setCourseId(0);
    setRequestStatus(false);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Телефон
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <label>
          Почта
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {undefined && (
          <>
            <label>
              <input type="text" value={course.id} />
            </label>
            <label>
              <input type="text" value="" />
            </label>
          </>
        )}

        <button type="button">Отменить</button>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FormRequest;
