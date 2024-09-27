import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import ServicesImgBlock from "./../../ui/clickableBlock/ServicesImgBlock";
import { Serv1, Serv2, Serv3 } from "./../../../img/img_exports";

function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <h1 className='services-header'>Услуги</h1>
      </div>
      <div className='container'>
        <div className='services-blocks'>
          <div className='services-block'>
            <ServicesImgBlock
              link='/corp_site'
              title='КОРПОРАТИВНЫЙ САЙТ'
              imgSrc={Serv1}
              text='Корпоративный сайт положительно скажестся на имидже, выгодно отличит компанию от конкурентов.'
            />
          </div>
          <div className='services-block'>
            <ServicesImgBlock
              link='/marketplace'
              title='ИНТЕРНЕТ МАГАЗИН'
              imgSrc={Serv2}
              text='Разработаем интернет магазин и увеличим продажи.'
            />
          </div>
          <div className='services-block'>
            <ServicesImgBlock
              link='/landing'
              title='ЛЭНДИНГ'
              imgSrc={Serv3}
              text='Лэндинг - отличный вариант для продвижения услуг, проведения акций или рекламы нового товара.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
