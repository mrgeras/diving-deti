import React, { useEffect } from 'react';
import logo from './logo/baltika kids logo-round.png';
import './Error.css';
import { useNavigate } from 'react-router-dom';
function Error(): JSX.Element {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div className="er4text">
        <h1 className="er4">4</h1>
        <img className="imgerror" src={logo} alt="f" />
        <h1 className="er4">4</h1>
      </div>
      <div>
        <h1 className="opps">Упс! Страница не найдена...</h1>
      </div>
      <div className="butdiv">
        <button className="buttonopps" type="submit" onClick={goBack}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default Error;
