import React, { useState } from 'react';
import './ButtonCourse.scss';
import { useAppDispatch } from '../../../Redux/store';
import { addRequest } from '../../../Redux/Reducers/RequestSlice';
import { Course } from '../types/CoursesType';

function ButtonRequest({ course }: { course: Course }): JSX.Element {
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [courseId] = useState(course.id);
  const [requestStatus, setRequestStatus] = useState(false);
  const [trigger, setTrigger] = useState(true);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const phoneMailRegExp =
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (!phoneMailRegExp.test(tel)) {
      alert('Введен неверный номер телефона');
      return;
    }

    dispatch(addRequest({ courseId, requestStatus, userName, tel, email }));

    setUserName('');
    setTel('');
    setEmail('');
    setRequestStatus(false);
    setTrigger(true);
  };

  return (
    <div>
      {trigger ? (
        <div className="button__course">
          <button
            type="button"
            className="blob-btn"
            onClick={() => setTrigger(false)}
          >
            <a className="blob-btn__link__req">Записаться</a>
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
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
        <form
          className="course__request__modal__group"
          onSubmit={onHandleSubmit}
        >
          <label className="course__request__modal__label__name">
            Имя
            <input
              required
              type="text"
              placeholder="Введите имя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="course__request__modal__name"
            />
          </label>
          <label className="course__request__modal__label__tel">
            Телефон
            <input
              required
              type="text"
              placeholder="Введите номер телефона"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="course__request__modal__tel"
            />
          </label>
          <label className="course__request__modal__label__email">
            Выберите мессенджер для связи
            <div className="select-input input-container">
              <select
                className="select-container"
                name="check"
                required
                onChange={(e) => setEmail(e.target.value)}
              >
                <option aria-label="None" value="" />
                <option value="По телефону">По телефону</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
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
          <div className="course__request__modal__btn__group">
            <button
              className="course__request__modal__btn__cancel btn-send"
              type="button"
              onClick={() => setTrigger(true)}
            >
              Отменить
            </button>
            <button className="course__request__modal__btn__send btn-send" type="submit">
              Отправить
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ButtonRequest;
