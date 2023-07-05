import React from 'react';
import './Three_otzov.css';

function Three_otzov(): JSX.Element {
  return (
    <div className='all_reki'>
      <div className="three_main">
        <div className="column1">
          <div className="text1">Безопасно</div>
          <div className="column1_ul">
            <ul className="column1_ull">
              <li>Опытные инструкторы</li>
              <li>
                Психолого-педагогическое образование и многолетний опыт работы с
                детьми
              </li>
              <li>
                Современное оборудование и собственная методика по обучению
                безопасности поведения на воде
              </li>
              <li>
                Малышам мы предлагаем костюмы для плавания во избежании
                переохлаждения
              </li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="text2">Море радости</div>
          <div className="column2_ul">
            <ul>
              <li>
                Научившись держаться на воде уверенно и показывая первые
                результаты, ваши дети с огромным желанием будут рваться на
                занятия дайвингом для достижения все более сложных задач.
              </li>
              <li>
                Мы постараемся удержать желание вашего ребенка приходить в наш
                дайвинг клуб и каждое посещение превратим в интересное событие.
              </li>
              <li>
                Тренировки на воде мы стараемся разнообразить играми и
                интересными упражнениями
              </li>
              <li>Организовываем городские и загородные</li>
            </ul>
          </div>
        </div>
        <div className="column3">
          <div className="text3">Полезно для здоровья</div>
          <div className="column3_ul">
            <ul>
              <li>
                Ни для кого не секрет, что занятия плаванием – это гармоничное
                физическое развитие, закалка и положительные эмоции.
              </li>
              <li>
                Работа над дыхательной системой, основы работы над собой,
                которые помогут ребятам находиться дольше под водой на задержке
                дыхания, а также общая физическая подготовка помогут достичь
                поставленных целей.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="zapis_button">
        <button type="button" className="zapis_button2">
          ЗАПИСАТЬСЯ
        </button>
      </div>
    </div>
  );
}

export default Three_otzov;