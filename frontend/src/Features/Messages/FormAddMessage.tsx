import React, { useRef } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addMessage } from '../../Redux/Reducers/MessageSlice';

function FormAddMessage(): JSX.Element {
  const messageImg = useRef<HTMLInputElement>(null);
  const messageName = useRef<HTMLInputElement>(null);
  const messageText = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (
      messageImg.current?.files?.length &&
      messageName.current?.value &&
      messageText.current?.value
    ) {
      const file = messageImg.current.files[0];
      const name = messageName.current.value;
      const text = messageText.current.value;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('text', text);
      dispatch(addMessage(formData));
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input type="file" name="img" ref={messageImg}                   required/>
        </label>
        <label>
          Название
          <input type="text" name="articleName" ref={messageName}                   required/>
        </label>
        <label>
          Описание
          <input type="text" name="articleText" ref={messageText}                   required/>
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddMessage;
