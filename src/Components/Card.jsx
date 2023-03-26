import traveler from "../img/traveler.png";
import searchMap from "../img/searchMap.png";
import saintpitersburg from "../img/saintpitersburg.png";
import carsTraveler from "../img/carsTraveler.png";

import littlePerson from "../icons/littlePerson.svg";
import calendar from "../icons/calendar.svg";

function Card() {
  const infoCards = [
    {
      id: 1,
      title:
        "Собираем рюкзак в поездку. Что брать с собой, а о чём лучше забыть?",
      icon: traveler,
      redakt: "Редакция Meile Wild",
      date: "02.08.21",
    },
    {
      id: 2,
      title: "А что есть кроме Сочи? Разбираемся на месте!",
      icon: searchMap,
      redakt: "Редакция Meile Wild",
      date: "02.08.21",
    },
    {
      id: 3,
      title: "Вторая столица? Проводим переоценку Питера.",
      icon: saintpitersburg,
      redakt: "Редакция Meile Wild",
      date: "02.08.21",
    },
    {
      id: 4,
      title: "Джип тур. Стоит ли своих денег, и почему вам срочно он нужен?",
      icon: carsTraveler,
      redakt: "Редакция Meile Wild",
      date: "02.08.21",
    },
  ];
  return (
    <>
      <div className="left-wrapper__info-box">
        {infoCards.map((current) => (
          <div key={current.id}>
            <img
              className="info-box__img"
              src={current.icon}
              alt="cardInfo"
            ></img>
            <p className="info-box__text">{current.title}</p>
            <div className="left-wrapper__info-box info">
              <div className="left-wrapper__text">
                <img src={littlePerson}></img>
                <p>Редакция Meile Wild</p>
              </div>
              <div className="left-wrapper__date date">
                <img src={calendar}></img>
                <p>02.08.21</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
