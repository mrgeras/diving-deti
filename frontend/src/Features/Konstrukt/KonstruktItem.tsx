import React, { useState, useRef } from 'react';
import { redirect } from 'react-router-dom';
import './KonstruktItem.scss';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { addArticle } from '../../Redux/Reducers/ArticleSlice';
import { addMessage } from '../../Redux/Reducers/MessageSlice';

function KonstruktItem(): JSX.Element {
  const { admin } = useAppSelector((store) => store.auth);

  const MainImg = useRef<HTMLInputElement>(null);
  const [titleValue, setTitleValue] = useState('');
  const [form1Value, setForm1Value] = useState('');
  const [maintextValue, setMaintextValue] = useState('');
  const [selectValue, setSelectValue] = useState('1');

  const dispatch = useAppDispatch();
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (
      MainImg.current?.files?.length &&
      titleValue &&
      form1Value &&
      maintextValue &&
      selectValue
    ) {
      const file = MainImg.current.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', titleValue);
      formData.append('text', form1Value);
      formData.append('text2', maintextValue);
      if (selectValue == '1') {
        dispatch(addMessage(formData));
        window.location.href = '/messages';
      } else {
        dispatch(addArticle(formData));
        window.location.href = '/articles';
      }
    }
  };

  return (
    <div>
      <h1 className="titletmain">СОЗДАНИЕ НОВОЙ ЗАПИСИ</h1>
      {admin && (
        <form onSubmit={onHandleSubmit} className="mainkonstrukt">
          <div className="title_yar">
            <p className="titlet">Заголовок</p>
            <textarea
              required
              className="title"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            >
              Заголовок
            </textarea>
          </div>
          <div className="first_yar">
            <div className="main_photo">
              <input type="file" name="courseImg" ref={MainImg} />
            </div>
            <div className="second_yar">
              <p className="neglavt">Текст</p>
              <textarea
                required
                className="form1"
                value={form1Value}
                onChange={(e) => setForm1Value(e.target.value)}
              >
                Текст
              </textarea>
            </div>
          </div>
          <div className="third_yar">
            <div className="third_yar_yar">
              <p className="glavt">Главный текст</p>
              <textarea
                required
                className="maintext"
                value={maintextValue}
                onChange={(e) => setMaintextValue(e.target.value)}
              >
                Главный текст
              </textarea>
            </div>
          </div>
          <div className="buttons_yar">
            <button className="submit" type="submit">
              Add
            </button>
            <select
              className="submitnear"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              {' '}
              <option value="1">Новость</option>
              <option value="2">Статья</option>
            </select>
          </div>
        </form>
      )}
    </div>
  );
}

export default KonstruktItem;
