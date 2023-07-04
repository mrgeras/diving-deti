import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { reviewsInit } from '../../Redux/Reducers/RewiewSlice';

function ReviewList(): JSX.Element {
  const [num, setNum] = useState(1);
  const { rewiews } = useAppSelector((store) => store.rewiews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(reviewsInit());
  }, []);
  
  console.log(rewiews);

  return (
    <div className="ReviewListmain">
      <div>Отзывы</div>
    </div>
  );
}

export default ReviewList;
