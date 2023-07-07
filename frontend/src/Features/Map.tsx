/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { YMaps, Map, Placemark, TrafficControl } from '@pbe/react-yandex-maps';
import './MapStyle.css';

function Ya(): JSX.Element {
  return (
    <YMaps
      query={{
        // ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      <Map
        defaultState={{
          center: [59.940082, 30.312814],
          zoom: 10,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        width={1200}
        height={500}
      >
        <Placemark
          defaultGeometry={[60.033063, 30.406849]}
          properties={{
            balloonContentBody:
              'Калининский район: Ул Ушинского, д.10 (м. Гражданский пр.)',
          }}
        />
        <Placemark
          defaultGeometry={[59.99481, 30.678195]}
          properties={{
            balloonContentBody: 'Всеволожск: Кальтино 130, Бассейн А30',
          }}
        />
        <Placemark
          defaultGeometry={[59.97993, 30.437428]}
          properties={{
            balloonContentBody:
              'Калининский/Красногвардейский районы: Пискаревский пр. 47с11',
          }}
        />
        <TrafficControl />
      </Map>
    </YMaps>
  );
}

export default Ya;
