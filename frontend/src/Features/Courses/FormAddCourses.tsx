import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addCourse } from '../../Redux/Reducers/CourseSlice';

function FormAddCourses(): JSX.Element {
  const [courseImg, setCourseImg] = useState('');
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(addCourse({ courseImg, courseName, description }));

    setCourseImg('');
    setCourseName('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input
            type="text"
            value={courseImg}
            onChange={(e) => setCourseImg(e.target.value)}
          />
        </label>
        <label>
          Название
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </label>
        <label>
          Описание
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddCourses;
