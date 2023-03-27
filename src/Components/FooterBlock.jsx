function FooterBlock() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div>
            <h5>Клиентам</h5>
            <p>О сервисе</p>
            <p>Котакты</p>
            <p>Блог</p>
          </div>
          <div>
            <h5>Сотрудничество</h5>
            <p>Рекламодателям</p>
            <p>Блогерам</p>
          </div>
          <div className="footer-wrapper__buttons">
            <button className="buttons__main-btn">
              Обратиться в поддержку
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterBlock;
