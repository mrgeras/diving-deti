import React from 'react';
import { Coach } from './CoachType';
import './About.scss';

function AboutItem({ coach }: { coach: Coach }): JSX.Element {
  return (
    <div className="coach">
      <img
        className="coach__img"
        src={coach.coachImg}
        alt="Матвеев Максим Викторович"
      />
      <h3 className="coach__name">{coach.coachName}</h3>
      <p className="coach__about">{coach.coachDescription}</p>
    </div>
  );
}

export default AboutItem;
