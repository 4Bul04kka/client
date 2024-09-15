import React from "react";
import "./homepage_body.css";
import { Serv1, Serv2, Serv3
 } from "./../../img/img_exports";

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
                <h2>КОРПОРАТИВНЫЙ САЙТ </h2>
                <img src={Serv1} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Корпоративный сайт положительно скажестся на имидже, выгодно
                  отличит компанию от конкурентов.{" "}
                </p>
              </Link>
            </li>
            <li className="block-item">
              <Link to="/marketplace">
                <h2>ИНТЕРНЕТ МАГАЗИН</h2>
                <img src={Serv2} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Разработаем интернет магазин и увеличим продажи.{" "}
                </p>
              </Link>
            </li>
            <li className="block-item">
              <Link to="/landing">
                <h2>ЛЭНДИНГ </h2>
                <img src={Serv3} alt="Image" className="block-item-image" />
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
          <h2 className="block-header">Новости и мероприятия</h2>
          <ul className="block-row">
            <li className="block-item">
              <a href="#!">
                <img src={Serv1} alt="Image" className="block-item-image" />
                <p className="block-item-text">
                  Мы успешно завершили разработку сайта для нашего клиента из
                  сферы здравоохранения.
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
            <div className="block-table-column">
              <div className="block-table-cell1">
                <p className="block-table-text">Профессионализм</p>
              </div>
              <div className="block-table-cell1">
                <p className="block-table-text">Комплексный подход</p>
              </div>
              <div className="block-table-cell1">
                <p className="block-table-text">Контроль качества</p>
              </div>
            </div>
            <div className="block-table-column">
              <div className="block-table-cell2">
                <p className="block-table-text">Индивидуальный подход</p>
              </div>
              <div className="block-table-cell2">
                <p className="block-table-text">Баланс предложения</p>
              </div>
              <div className="block-table-cell2">
                <p className="block-table-text">Гарантийные обязательства</p>
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
            Наша команда профессионалов с богатым опытом работы в индустрии гарантирует высокое качество и инновационные подходы в каждом проекте. 
            Мы стремимся превзойти ваши ожидания и помочь вам реализовать самые амбициозные идеи.
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
