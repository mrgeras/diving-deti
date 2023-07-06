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
      <div className="coach-card-container">
      <div className="about-text">
        <p className="">
          К нам в дайвклуб приходят разные дети: веселые, болтливые, молчуны,
          шумные, капризные, обидчивые, гиперподвижные, некоторые со страхом
          воды, некоторые абсолютно бесстрашные, что тоже настораживает! Все эти
          ребята абсолютно разные, каждый из них достиг своих высот. Для нас же
          важно, чтобы любой ребенок, пришедший в наш клуб детского дайвинга
          почувствовал себя частью его.
        </p>
        <br />
        <p className="">
          Не зависимо от возраста, цель наших занятий, не только научить детей
          уверенно держаться на воде, погружаться на задержке дыхания и нырять с
          аквалангом, но и уметь работать в коллективе, помогать младшим и
          тянутся за старшими.
        </p>
        <br />
        <p className="">
          Наши тренера — сертифицированные дайверы, фридайверы, тренера по
          плаванию, ещё и хорошие педагоги-психологи. Мы постараемся сделать
          так, чтобы ваш ребенок с радостью бежал на наши занятия и получал
          максимум удовольствия от плавания, погружений под воду, фридайвинга, а
          также знаний, которые помогут ему и в будущем!
        </p>
      </div>
      <h1>НАШИ ИНСТРУКТОРЫ</h1>
        {coaches.map((coach) => (
          <AboutItem key={coach.id} coach={coach} />
        ))}
      </div>
      <div className="our-adresses">
        <h2>Адреса площадок:</h2>
        <p>1. Ушинского 10, к2</p>
        <p>2. Пискарёвский просп., 47, стр. 11</p>
        <p>3. Всеволожск, д. Кальтино 130</p>
      </div>
    </div>
  );
}

export default AboutList;
