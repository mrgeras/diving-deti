import React from 'react';
import { Coach } from './CoachType';

function AboutItem({ coach }: { coach: Coach }): JSX.Element {
  return (
    <div>
      <h1 className="about-header">О нашей школе дайвинга</h1>
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
      <div>
        <br />
        <br />
        <h1>НАШИ ИНСТРУКТОРЫ</h1>
        <div className="our-couch">
          <h3 className="couch-name">{coach.coachName}</h3>
          <img src={coach.coachImg} alt="Матвеев Максим Викторович" />
          <p className="about-couch">{coach.coachDescription}</p>
        </div>
      </div>
      <br />
      <br />
      <div className="our-adresses">
        <h2>Адреса площадок:</h2>
        <p>1. Ушинского 10, к2</p>
        <p>2. Пискарёвский просп., 47, стр. 11</p>
        <p>3. Всеволожск, д. Кальтино 130</p>
      </div>
    </div>
  );
}

export default AboutItem;
