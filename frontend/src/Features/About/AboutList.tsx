import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import AboutItem from './AboutItem';
import { coachInit } from '../../Redux/Reducers/CoachSlice';

function AboutList(): JSX.Element {
  const { coaches } = useAppSelector((store) => store.coaches);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coachInit());
  }, []);

  return (
    <div className="coach-card-wrapper">
      <h1 className="title">О нашей школе</h1>
      <h2>НАШИ ИНСТРУКТОРЫ</h2>
      <div className="coach-card-container">
        {coaches.map((coach) => (
          <AboutItem key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
}

export default AboutList;
