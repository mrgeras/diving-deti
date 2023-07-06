import React, { useState } from 'react';
import { Course, CourseId } from './types/CoursesType';
import './Course.scss';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { deleteCourse } from '../../Redux/Reducers/CourseSlice';
import ButtonCourse from './Buttons/ButtonCourse';
import ButtonRequest from './Buttons/ButtonRequest';

function CourseItem({ course }: { course: Course }): JSX.Element {
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(true);
  const { admin } = useAppSelector((store) => store.auth);

  const onHandleRemove = (value: CourseId): void => {
    dispatch(deleteCourse(value));
  };

  return (
    <>
      <div className="course__card">
        <img className="course__card__img" src={course.courseImg} alt="" />
        <div className="course__card__description">
          <div className="course__card__description__name">
            {course.courseName}
            {admin &&
              (trigger ? (
                <button
                  className="course__card__description__btn__del"
                  type="button"
                  onClick={() => setTrigger(false)}
                >
                  X
                </button>
              ) : (
                <div className="course__card__description__modal__group">
                  <h4 className="course__card__description__modal__text">
                    Вы точно хотите удалить этот курс?
                  </h4>
                  <div className="course__card__description__btn__modal">
                    <button
                      className="course__card__description__btn__modal__yes"
                      type="button"
                      onClick={() => onHandleRemove(course.id)}
                    >
                      Да
                    </button>
                    <button
                      className="course__card__description__btn__modal__no"
                      type="button"
                      onClick={() => setTrigger(true)}
                    >
                      Нет
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <p className="course__card__description__text">
            {course.description}
          </p>
          <div className="course__card__description__btn__group">
            <ButtonCourse course={course} />
            <ButtonRequest course={course} />
          </div>
          {/* <FormRequest key={course.id} course={course} /> */}
        </div>
      </div>
      {/* <div className="course-card-item">
        <img className="course-card-img" src={course.courseImg} alt="course" />
        <p className="course-card-name">{course.courseName}</p>
        <p className="course-card-description">{course.description}</p>
        <div className="course-btn-group">
          <button className="about-course-btn" type="button">
            <Link to={`/courses/${course.id}`} className="link-text">
              Подробнее
            </Link>
          </button>
          {trigger ? (
            <button
              className="del-course-btn"
              type="button"
              onClick={() => setTrigger(false)}
            >
              Удалить
            </button>
          ) : (
            <div className="modal-course-group">
              <h4 className="modal-course-text">Вы точно хотите удалить?</h4>
              <div className="btn-modal-course-group">
                <button
                  className="btn-course-yes"
                  type="button"
                  onClick={() => onHandleRemove(course.id)}
                >
                  Да
                </button>
                <button
                  className="btn-course-no"
                  type="button"
                  onClick={() => setTrigger(true)}
                >
                  Нет
                </button>
              </div>
            </div>
          )}
        </div>
        <FormRequest key={course.id} course={course} />
      </div> */}
    </>
  );
}

export default CourseItem;

//
