import React from "react";
import PortfolioBlock from "./PortfolioBlock"; // Import the reusable component
import "./portfolio.css";
import { we2, aw3, awards } from "./../../../img/img_exports";
function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='container'>
        <h1 className='portfolio-header'>Портфолио</h1>
      </div>
      <div className='container'>
        <div className='portfolio-blocks'>
          <PortfolioBlock
            linkTo='/portfolio/awards'
            text='Наша компания получила множество наград за свою работу над созданием корпоративных сайтов, интернет-магазинов и лендингов. В частности, компания была отмечена за высокое качество дизайна и функциональности сайтов, а также за умение удовлетворить потребности клиентов и предоставить им эффективные решения для онлайн-бизнеса.'
            imageSrc={awards}
            imageAlt='Awards'
          />
          <PortfolioBlock
            linkTo='/portfolio/works'
            text='Мы имеем богатый опыт в создании сайтов для различных отраслей и целей. Наша команда профессионалов стремится создавать уникальные и эффективные решения, которые помогают нашим клиентам достичь своих бизнес-целей. Мы работаем с коммерческими, государственными и муниципальными заказчиками.'
            imageSrc={we2}
            imageAlt='Works'
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
