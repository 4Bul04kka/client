import React from "react";
import "./homepageBody.css";
import {
  Serv1,
  Serv2,
  Serv3,
  NewsBlockImg,
  cs5,
  la2,
  mp5,
} from "./../../../img/img_exports";

import ImgBlock from "./homepageImgBlock/ImgBlock";
import { Link } from "react-router-dom";

const BlockHeader = ({ text }) => <h2 className='block-header'>{text}</h2>;

function DevBlock() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='block'>
          <BlockHeader text='РАЗРАБОТКА САЙТОВ' />
          <ul className='block-row'>
            <ImgBlock
              link='/corp_site'
              title='КОРПОРАТИВНЫЙ САЙТ'
              imgSrc={cs5}
              text='Корпоративный сайт положительно скажестся на имидже, выгодно отличит компанию от конкурентов.'
            />
            <ImgBlock
              link='/marketplace'
              title='ИНТЕРНЕТ МАГАЗИН'
              imgSrc={mp5}
              text='Разработаем интернет магазин и увеличим продажи.'
            />
            <ImgBlock
              link='/landing'
              title='ЛЕНДИНГ'
              imgSrc={la2}
              text='Лендинг - отличный вариант для продвижения услуг, проведения акций или рекламы нового товара.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function NewsBlock() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='block'>
          <div className='news'>
            <BlockHeader text='Новости и мероприятия' />

            <Link to='/events'>
              <img className='newsImg' src={NewsBlockImg} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pluses() {
  const plusesColumn1 = [
    "Профессионализм",
    "Комплексный подход",
    "Контроль качества",
  ];
  const plusesColumn2 = [
    "Индивидуальный подход",
    "Баланс предложения",
    "Гарантийные обязательства",
  ];

  return (
    <div className='body'>
      <div className='container'>
        <div className='block'>
          <BlockHeader text='НАШИ ДОСТОИНСТВА' />
          <div className='block-table'>
            <div className='block-table-column'>
              {plusesColumn1.map((plus, index) => (
                <div key={index} className='block-table-cell'>
                  <p className='block-table-text'>{plus}</p>
                </div>
              ))}
            </div>
            <div className='block-table-column'>
              {plusesColumn2.map((plus, index) => (
                <div key={index} className='block-table-cell'>
                  <p className='block-table-text'>{plus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='block'>
          <BlockHeader text='О НАС' />
          <div>
            <p className='about-us-text'>
              Наша команда профессионалов с богатым опытом работы в индустрии
              гарантирует высокое качество и инновационные подходы в каждом
              проекте. Мы стремимся превзойти ваши ожидания и помочь вам
              реализовать самые амбициозные идеи.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div className='main-page'>
      <DevBlock />
      <NewsBlock />
      <Pluses />
      <AboutUs />
    </div>
  );
}

export default Homepage;
