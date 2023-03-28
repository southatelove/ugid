import Arrow from "../icons/Arrow.svg";
import React, { useState } from "react";

import "../css/style.css";

function Header({ burger, setBurger }) {
  return (
    <section className="header-section">
      <div
        className={burger ? `hamburger_active hamburger` : "hamburger"}
        onClick={() => setBurger((prev) => !prev)}
      >
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
      </div>
      <header className="main-section__header header">
        <div
          className={
            burger
              ? "main-section__nav-container container nav-menu nav-menu_active"
              : "main-section__nav-container container nav-menu"
          }
          // onClick={() => setBurger((prev) => !prev)}
        >
          <img
            src={Arrow}
            className="nav-menu__img"
            onClick={() => setBurger((prev) => !prev)}
          ></img>
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
