import React, { useRef } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addCourse } from '../../Redux/Reducers/CourseSlice';

function FormAddCourses(): JSX.Element {
  const courseImg = useRef<HTMLInputElement>(null);
  const courseName = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (
      courseImg.current?.files?.length &&
      courseName.current?.value &&
      description.current?.value
    ) {
      const file = courseImg.current.files[0];
      const name = courseName.current.value;
      const text = description.current.value;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('text', text);

      dispatch(addCourse(formData));
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input type="file" name="courseImg" ref={courseImg} required />
        </label>
        <label>
          Название
          <input type="text" name="courseName" ref={courseName} required />
        </label>
        <label>
          Описание
          <input type="text" name="description" ref={description} required />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddCourses;
