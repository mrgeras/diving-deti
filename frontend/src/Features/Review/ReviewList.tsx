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
    const fetchReviews = async (): Promise<any> => {
      await dispatch(reviewsInit());
      setLoading(false);
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <h1 className="mainfoot">ОТЗЫВЫ:</h1>
      <div className="ReviewListmain">
        <button
          className="butmin"
          type="button"
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            }
          }}
        />
        <div className="textall">
          <h1 className="nameofrew">{rewiews[num]?.userName}</h1>
          <div className="textofrew">{rewiews[num]?.reviewText}</div>
        </div>

        <button
          type="button"
          className="butplus"
          onClick={() => {
            if (num <= rewiews.length - 2) {
              setNum(num + 1);
            }
          }}
        />
      </div>
    </>
  );
}

export default ReviewList;
