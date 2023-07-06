import React, { useState } from 'react';
import './Three_otzov.css';
import { Course } from '../Courses/types/CoursesType';
import { useAppDispatch } from '../../Redux/store';
import { addRequest } from '../../Redux/Reducers/RequestSlice';

function ThreeOtzov({ course }: { course: Course }): JSX.Element {
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
      // eslint-disable-next-line no-useless-escape
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ &&
      // eslint-disable-next-line no-useless-escape
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
    <div className="all_reki">
      <div className="three_main">
        <div className="column1">
          <div className="text1">Безопасно</div>
          <div className="column1_ul">
            <ul className="column1_ull">
              <li>Опытные инструкторы</li>
              <li>
                Психолого-педагогическое образование и многолетний опыт работы с
                детьми
              </li>
              <li>
                Современное оборудование и собственная методика по обучению
                безопасности поведения на воде
              </li>
              <li>
                Малышам мы предлагаем костюмы для плавания во избежании
                переохлаждения
              </li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="text2">Море радости</div>
          <div className="column2_ul">
            <ul>
              <li>
                Научившись держаться на воде уверенно и показывая первые
                результаты, ваши дети с огромным желанием будут рваться на
                занятия дайвингом для достижения все более сложных задач.
              </li>
              <li>
                Мы постараемся удержать желание вашего ребенка приходить в наш
                дайвинг клуб и каждое посещение превратим в интересное событие.
              </li>
              <li>
                Тренировки на воде мы стараемся разнообразить играми и
                интересными упражнениями
              </li>
              <li>Организовываем городские и загородные</li>
            </ul>
          </div>
        </div>
        <div className="column3">
          <div className="text3">Полезно для здоровья</div>
          <div className="column3_ul">
            <ul>
              <li>
                Ни для кого не секрет, что занятия плаванием – это гармоничное
                физическое развитие, закалка и положительные эмоции.
              </li>
              <li>
                Работа над дыхательной системой, основы работы над собой,
                которые помогут ребятам находиться дольше под водой на задержке
                дыхания, а также общая физическая подготовка помогут достичь
                поставленных целей.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="zapis_button">
        <div>
          {trigger ? (
            <div className="button__course zapis_button2">
              <button
                type="button"
                className="blob-btn"
                onClick={() => setTrigger(false)}
              >
                <a className="blob-btn__req">Записаться</a>
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
      </div>
    </div>
  );
}

export default ThreeOtzov;
