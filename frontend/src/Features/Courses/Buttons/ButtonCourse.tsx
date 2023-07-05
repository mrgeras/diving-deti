import React from 'react';
import './ButtonCourse.scss';
import { Link } from 'react-router-dom';
import { Course } from '../types/CoursesType';

function ButtonExample({ course }: { course: Course }): JSX.Element {
  return (
    <div className="button__course">
      <button type="button" className="blob-btn ">
        <Link
          to={`/courses/${course.id}`}
          className="blob-btn__link"
        >
          Подробнее
        </Link>
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
  );
}

export default ButtonExample;
