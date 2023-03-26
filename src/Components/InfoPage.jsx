import russiaEmail from "../img/russiaEmail.png";
import town from "../img/town.png";

import littlePerson from "../icons/littlePerson.svg";
import calendar from "../icons/calendar.svg";

import Card from "./Card";
function InfoPage() {
  return (
    <>
      <section className="info-section">
        <div className="info-section__content-container container">
          <div className="info-section__left-wrapper">
            <Card />
          </div>
          <div className="info-section__right-wrapper">
            <div className="info-section__box">
              <img className="info-section__img" src={town} alt="town"></img>
              <div className="right-wrapper__discount">
                <p>Лучшее за неделю</p>
              </div>
            </div>
            <h2 className="info-section__title title">
              Всё о поездке в Грецию прямо <br></br>сейчас: въезд, билеты, виза
            </h2>
            <p className="info-section__text text">
              Греция стала первой страной Шенгена, открывшейся для туристов из
              России — это <br></br> случилось ещё в мае. С ней открыто
              <br></br>
              авиасообщение, и улететь к Средиземному <br></br> морю можно не
              только из Москвы и <br></br>Петербурга. Собрали всё, что нужно для
              <br></br>
              поездки
            </p>
            <div className="left-wrapper__info info">
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
        </div>
        <div className="container">
          <img className="info-section__email" src={russiaEmail}></img>
        </div>
      </section>
    </>
  );
}

export default InfoPage;
