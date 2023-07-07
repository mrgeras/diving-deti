import React from 'react';
import { Coach } from './CoachType';

function AboutItem({ coach }: { coach: Coach }): JSX.Element {
  return (
    <div>

      <div>
        <br />
        <br />

        <div className="our-couch">
          <h3 className="couch-name">{coach.coachName}</h3>
          <img style={{width: '300px'}} src={coach.coachImg} alt="Матвеев Максим Викторович" />
          <p className="about-couch">{coach.coachDescription}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default AboutItem;
