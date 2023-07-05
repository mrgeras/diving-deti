/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Ya(): JSX.Element {
  return (
    <YMaps>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Map
          defaultState={{ center: [59.940082, 30.312814], zoom: 10 }}
          width={1200}
          height={500}
        >
          <Placemark geometry={[60.033063, 30.406849]} />
          <Placemark geometry={[59.97993, 30.437428]} />
          <Placemark geometry={[59.99481, 30.678195]} />
        </Map>
      </div>
    </YMaps>
  );
}

export default Ya;
