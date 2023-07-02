import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../Redux/store';

function InformationAbout(): JSX.Element {
  const { informationId } = useParams();
  const navigate = useNavigate();

  const { informations } = useAppSelector((store) => store.informations);

  let information;
  if (informationId) {
    information = informations.find((info) => info.id === +informationId);
  }

  const error = <h1>Таких новостей нет</h1>;

  const content = (
    <>
      <h3>{information?.information_name}</h3>
      <img
        className="information-page__img"
        src={information?.information_img}
        alt="information"
      />
      <p>{information?.information_text}</p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку новостей
      </button>
    </>
  );

  return (
    <div className="information-page__container">
      {!information ? error : content}
    </div>
  );
}

export default InformationAbout;
