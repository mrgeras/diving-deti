import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import InformationItem from './InformationItem';
import { informationsInit } from '../../Redux/Reducers/InformationSlice';
// import './InformationList.css';

function InformationList(): JSX.Element {
  const { informations } = useAppSelector((store) => store.informations);
  const dispatch = useAppDispatch();
console.log(informations);
  useEffect(() => {
    dispatch(informationsInit());
  }, []);
  return (
    <div className="information-card-wrapper">
      <div className="information-card-container">
        Новости
        {informations.map((information) => (
          <InformationItem key={information.id} information={information} />
        ))}
      </div>
    </div>
  );
}

export default InformationList;
