import React, { useEffect } from 'react';
import logo from './logo/baltika kids logo-round.png';
import './Error.css';
function Error(): JSX.Element {
  return (
    <div>
      <div className="er4text">
        <h1 className="er4">4</h1>
        <img className='imgerror' src={logo} alt="f" />
        <h1 className="er4">4</h1>
      </div>
      <div>
        <h1 className="opps">Упс! Страница не найдена...</h1>
      </div>
    </div>
  );
}

export default Error;
