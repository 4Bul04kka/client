import React from "react";
import "./homepage_body.css";
import temp from "./../../img/homepage_contents/image8.png";

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
                <p className="block-item-text">Мы успешно завершили разработку сайта для нашего клиента из сферы здравоохранения.</p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Мы успешно завершили разработку сайта для нашего клиента из сферы финансов.</p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Наша компания выиграла конкурс на разработку нового корпоративного сайта для крупной компании.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default News_block;
