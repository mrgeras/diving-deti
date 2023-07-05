import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { reviewsInit } from '../../Redux/Reducers/RewiewSlice';
import './ReviewList.css';

function ReviewList(): JSX.Element {
  const [num, setNum] = useState(0);
  const { rewiews } = useAppSelector((store) => store.rewiews);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      await dispatch(reviewsInit());
      setLoading(false);
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ReviewListmain">
      <button
        className="butmin"
        type="button"
        onClick={() => {
          if (num > 0) {
            setNum(num - 1);
          }
        }}
      >
        ᐸ
      </button>
      <div className="textall">
        <div className="nameofrew">{rewiews[num].userName}</div>
        <div className="textofrew">{rewiews[num].reviewText}</div>
      </div>

      <button
        type="button"
        className="butplus"
        onClick={() => {
          if (num <= rewiews.length - 2) {
            setNum(num + 1);
          }
        }}
      >
        ᐳ
      </button>
    </div>
  );
}

export default ReviewList;
