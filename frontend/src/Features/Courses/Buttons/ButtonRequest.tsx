import React, { useState } from 'react';
import './ButtonRequest.scss';
import { useAppDispatch } from '../../../Redux/store';
import { addRequest } from '../../../Redux/Reducers/RequestSlice';
import { Course } from '../types/CoursesType';
// import { Link } from 'react-router-dom';
// import { Course } from '../types/CoursesType';

function ButtonRequest({ course }: { course: Course }): JSX.Element {
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(course.id);
  const [requestStatus, setRequestStatus] = useState(false);
  const [trigger, setTrigger] = useState(true);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const phoneMailRegExp =
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ &&
      /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    if (!phoneMailRegExp.test(tel) && !phoneMailRegExp.test(email)) {
      alert('Введен неверный номер телефона или адрес электронной почты');
      return;
    }

    dispatch(addRequest({ courseId, requestStatus, userName, tel, email }));

    setUserName('');
    setTel('');
    setEmail('');
    setCourseId(0);
    setRequestStatus(false);
  };

  return (
    <div>
      {trigger ? (
        <div className="button__course__req">
          <button
            type="button"
            className="blob-btn__req"
            onClick={() => setTrigger(false)}
          >
            <a className="blob-btn__link__req">Записаться</a>
            <span className="blob-btn__inner__req">
              <span className="blob-btn__blobs__req">
                <span className="blob-btn__blob__req" />
                <span className="blob-btn__blob__req" />
                <span className="blob-btn__blob__req" />
                <span className="blob-btn__blob__req" />
              </span>
            </span>
          </button>
          <br />

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
          </svg>
        </div>
      ) : (
        <form onSubmit={onHandleSubmit}>
          <label>
            Имя
            <input
              required
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Телефон
            <input
              required
              type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </label>
          <label>
            Почта
            <input
              required
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

          <button type="button" onClick={() => setTrigger(true)}>
            Отменить
          </button>
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
}

export default ButtonRequest;
