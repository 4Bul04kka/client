import React from "react";
import "./servicePages.css";
import { Serv1 } from "../../../../img/img_exports";
import GoogleForm from "../servUi/googleForm/GoogleForm";
import WorkExamples from "../servUi/workExamples/WorkExamples";

function CorpPage() {
  return (
    <section className='work-details'>
      <div className='container'>
        <div>
          <h1 className='service-header'>Корпоративный сайт</h1>
          <p className='service-info'>
            Стоимость: от 500 000 руб. Срок: от 60 рабочих дней.
          </p>
          <p>
            Корпоративный сайт - хороший вариант как для солидной, давно
            существующей на рынке компании, так и для новой фирмы, планирующей
            сразу и громко заявить о себе.
          </p>
          <p>
            Создание корпоративного сайта особенно эффективно в тех случаях,
            когда на рынке присутствует плотная конкуренция, и многие
            потенциальные клиенты составляют мнение о компании после изучения ее
            сайта. Вполне естественно, что при прочих равных, предпочтение
            отдается той компании, которая сумела представить себя в интернете
            наиболее выгодным образом.
          </p>
          <p>
            В случае разработки корпоративного сайта, дизайн создается с «нуля».
            Созданию дизайна часто предшествует работа по созданию прототипов
            ключевых страниц, которые позволяют на ранних этапах более точно
            подстроится под целевую аудиторию, расставить акценты в нужных
            местах.
          </p>
          <p>
            На корпоративном сайте, в отличие от экономичных решений, более
            подробно представлена информация о компании, товарах и услугах,
            применяются индивидуальные элементы дизайна и взаимодействия.
          </p>
          <GoogleForm />
          <WorkExamples pic1={Serv1} pic2={Serv1} />
        </div>
      </div>
    </section>
  );
}

export default CorpPage;