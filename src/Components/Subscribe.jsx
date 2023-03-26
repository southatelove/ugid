function Subscribe() {
  return (
    <>
      <section className="subscribe-section">
        <div className="subscribe-section__content-container container">
          <h3 className="subscribe-section__title title">Рассылка новостей</h3>
          <p className="subscribe-section__first-text text">
            Подпишись и получай новсти, статьи и рассказы о<br></br>
            путешествиях. Так же жди скидки и конкурсы!
          </p>
          <div className="subscribe-section__box-items item">
            <input
              placeholder="Адрес электронной почты"
              className="item__input"
            ></input>
            <button className="item__button">Подписаться</button>
          </div>
          <p className="subscribe-section__second-text">
            Нажимая «Подписаться», вы соглашаетесь с 
            <span>
              <a className="second-text__first-param">
                правилами использования <br></br>сервиса
              </a>
            </span>
            <a> и </a>
            <span>
              <a className="second-text__second-param">
                обработки персональных данных
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
