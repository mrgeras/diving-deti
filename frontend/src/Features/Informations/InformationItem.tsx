import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Information } from './types/InfoTypes';
// import './InformationItem.css';

function getAboutInformation({
  information,
  navigate,
}: {
  information: Information;
  navigate: (value: string) => void;
}): void {
  navigate(`/informations/${information.id}`);
}

function InformationItem({
  information,
}: {
  information: Information;
}): JSX.Element {
  const navigate = useNavigate();
  // console.log(information);
  return (
    <div className="information-card">
      <a className="about-card-info">
        <button
          className="about-info-btn"
          onClick={() => getAboutInformation({ information, navigate })}
          type="button"
        >
          <img
            className="information-card-img"
            src={information.information_img}
            alt=""
          />
          <p>{information.information_name}</p>
          <p>{information.information_text}</p>

        </button>
      </a>
    </div>
  );
}

export default InformationItem;
