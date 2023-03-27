import "../css/style.css";
function Header() {
  return (
    <section className="header-section">
      <header className="main-section__header header">
        <div className="main-section__nav-container container">
          <div className="main-section__nav nav-menu">
            <ul className="nav-menu__list">
              <li className="nav-menu__list-item">
                <a href="#mainBlog">О нас</a>
              </li>
              <li className="nav-menu__list-item">
                <a href="#newsBlog">Новости</a>
              </li>
              <li className="nav-menu__list-item">
                <a href="#">Поддержка</a>
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
