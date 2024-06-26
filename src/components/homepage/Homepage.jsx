import React from "react";
import "./homepage_body.css";
import temp from "./../../img/homepage_contents/image8.png";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Dev_block() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="block-header">РАЗРАБОТКА САЙТОВ</h2>
          <ul className="block-row">
            <li className="block-item">
              <Link to="/corp_site">
                <h2>КОРПОРАТИВНЫЙ САЙТ</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Корпоративный сайт положительно скажестся на имидже, выгодно
                  отличит компанию от конкурентов.{" "}
                </p>
              </Link>
            </li>
            <li className="block-item">
              <Link to="/marketplace">
                <h2>ИНТЕРНЕТ МАГАЗИН</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Разработаем интернет магазин и увеличим продажи.{" "}
                </p>
              </Link>
            </li>
            <li className="block-item">
              <Link to="/landing">
                <h2>ЛЭНДИНГ </h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Лэндинг - отличный вариант для продвижения услуг, проведения
                  акций или рекламы нового товара.
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function News_block() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="block-header">НАШИ НОВОСТИ</h2>
          <ul className="block-row">
            <li className="block-item">
              <a href="#!">
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Мы успешно завершили разработку сайта для нашего клиента из
                  сферы здравоохранения.
                </p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Мы успешно завершили разработку сайта для нашего клиента из
                  сферы финансов.
                </p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Наша компания выиграла конкурс на разработку нового
                  корпоративного сайта для крупной компании.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Pluses() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="block-header">НАШИ ДОСТОИНСТВА</h2>
          <div className="block-table">
            <div className="block-table-row">
              {/* Repeat the following div for each of the three text pieces in the first row */}
              <div className="block-table-cell">
                <p className="block-table-text">Text Piece</p>
              </div>
            </div>
            <div className="block-table-row">
              {/* Repeat the following div for each of the three text pieces in the second row */}
              <div className="block-table-cell">
                <p className="block-table-text">Text Piece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About_us() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="about-us-header">О НАС</h2>
          <div>
            <p className="about-us-text">
              Ну типо какой-то осмысленный текст содержащий информацию о
              достоиствах нашей компании и почему именно её стоит выбрать среди
              массы конкурентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div className="main_page">
      <Dev_block />
      <News_block />
      <Pluses />
      <About_us />
    </div>
  );
}
export default Homepage;
