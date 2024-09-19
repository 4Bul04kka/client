import React from "react";
import { Link } from "react-router-dom";
import ".//service_pages.css";
import { Serv1, Serv2, Serv3 } from "./../../../img/img_exports";

function Work_details() {
  return (
    <div className='work_details'>
      <div className='body'>
        <div className='container'>
          <h1>Корпоративный сайт</h1>
        </div>
        <div className='container'>
          <p>Стоимость: от 500 000 руб. Срок: от 60 рабочих дней.</p>
        </div>
        <div className='container'>
          <p>
            Корпоративный сайт - хороший вариант как для солидной, давно
            существующей на рынке компании, так и для новой фирмы, планирующей
            сразу и громко заявить о себе.
          </p>
        </div>
        <div className='container'>
          <p>
            Создание корпоративного сайта особенно эффективно в тех случаях,
            когда на рынке присутствует плотная конкуренция, и многие
            потенциальные клиенты составляют мнение о компании после изучения ее
            сайта. Вполне естественно, что при прочих равных, предпочтение
            отдается той компании, которая сумела представить себя в интернете
            наиболее выгодным образом.
          </p>
        </div>
        <div className='container'>
          <p>
            В случае разработки корпоративного сайта, дизайн создается с «нуля».
            Созданию дизайна часто предшествует работа по созданию прототипов
            ключевых страниц, которые позволяют на ранних этапах более точно
            подстроится под целевую аудиторию, расставить акценты в нужных
            местах.
          </p>
        </div>
        <div className='container'>
          <p>
            На корпоративном сайте, в отличие от экономичных решений, более
            подробно представлена информация о компании, товарах и услугах,
            применяются
          </p>
        </div>
      </div>
    </div>
  );
}
function Work_examples() {
  return (
    <div className='work_examples'>
      <div className='body'>
        <div className='container'>
          <p>Примеры работ</p>
        </div>
        <div className='example_pictures'>
          <img src={Serv1} alt='llChangeSoon' className='example_img' />
          <img src={Serv1} alt='llChangeSoon' className='example_img' />
        </div>
      </div>
    </div>
  );
}

function Corp_site() {
  return (
    <div className='corp-site'>
      <Work_details />
      <Work_examples />
    </div>
  );
}

export default Corp_site;
