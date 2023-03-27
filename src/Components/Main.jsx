import mountain from "../img/mountain.png";

import vector from "../icons/vector.svg";
import littlePerson from "../icons/littlePerson.svg";
import calendar from "../icons/calendar.svg";

function Main() {
  return (
    // Основная секция
    <section id="mainBlog" className="main-section">
      <div className="main-section__content-container container">
        <div className="main-section__blog">
          <p className="main-section__text">Главная</p>
          <img src={vector}></img>
          <p>Блог</p>
        </div>
        <div className="main-section__content">
          <div className="main-section__left-wrapper">
            <img
              src={mountain}
              alt="mountain"
              className="left-wrapper__img"
            ></img>
            <h1 className="left-wrapper__title title">
              Турция закрыта! Подогреваем интерес <br></br>подборкой лучших мест
              этой страны.
            </h1>
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
          <div className="main-section__right-wrapper">
            <div className="right-wrapper__news-box">
              <h2 className="news-box__title">Новости</h2>
              <p className="news-box__text">
                Новый лоукост от S7: что же это<br></br> будет?
              </p>
              <div className="right-wrapper__date date">
                <img src={calendar}></img>
                <p>02.08.21</p>
              </div>
              <hr className="right-wrapper__first-hr"></hr>
              <p className="news-box__text">
                Хорватия открыта!!! Почему это <br></br>сказочное место и надо
                лететь.
                <br></br> будет?
              </p>
              <div className="right-wrapper__date date">
                <img src={calendar}></img>
                <p>02.08.21</p>
              </div>
              <hr className="right-wrapper__second-hr"></hr>
              <p className="news-box__text">
                Должник? Теперь у тебя могут <br></br>забрать загранпаспорт на
                выезде.<br></br> будет?
              </p>
              <div className="right-wrapper__date date">
                <img src={calendar}></img>
                <p>02.08.21</p>
              </div>
            </div>
            <div className="right-wrapper__button ">
              <button className="button__main-btn">Все новости</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
