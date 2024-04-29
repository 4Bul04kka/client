import React from "react";
import "./homepage_body.css";
import temp from "./../../img/homepage_contents/image8.png";

function Dev_block() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="block-header">РАЗРАБОТКА САЙТОВ</h2>
          <ul className="block-row">
            <li className="block-item">
              <a href="#!">
                <h2>КОРПОРАТИВНЫЙ САЙТ</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Корпоративный сайт положительно скажестся на имидже, выгодно отличит компанию от конкурентов. </p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <h2>ИНТЕРНЕТ МАГАЗИН</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Разработаем интернет магазин и увеличим продажи. </p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <h2>ЛЭНДИНГ </h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Лэндинг - отличный вариант для продвижения услуг, проведения акций или рекламы нового товара.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dev_block;
