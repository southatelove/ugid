import "../css/style.css";

function Header() {
  return (
    <section className="header-section">
      <header className="main-section__header header">
        <div className="main-section__nav-container container">
          <div className="main-section__nav">
            <ul className="nav-menu__list ">
              <li className="nav-menu__list-item">
                <a href="#mainBlog" className="list-item__tags">
                  О нас
                </a>
              </li>
              <li className="nav-menu__list-item">
                <a href="#newsBlog" className="list-item__tags">
                  Новости
                </a>
              </li>
              <li className="nav-menu__list-item">
                <a href="#" className="list-item__tags">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>
          <button className="header__main-btn">Личный кабинет</button>
        </div>
      </header>
    </section>
  );
}

export default Header;
