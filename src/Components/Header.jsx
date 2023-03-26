import "../css/style.css";
function Header() {
  return (
    <section className="header-section">
      <div className="main-section__nav-container container">
        <header className="main-section__header"></header>
        <div className="main-section__nav nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__list-item">
              <a href="#">О нас</a>
            </li>
            <li className="nav-menu__list-item">
              <a href="#">Запись</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
