import React from "react";
import "./header.css";
import logo from "./../../img/logo_hori.jpg";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Услуги
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Портфолио
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                О компании
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Контакты
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                Мероприятия
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-buttons-container">
          <button className="header-button">Sign In</button>
          <button className="header-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
