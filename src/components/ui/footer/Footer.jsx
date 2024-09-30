import React from "react";
import "./footer.css";
import { logo_footer } from "./../../../img/img_exports";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_text'>
          <p>
            Адрес: 394000, Россия, г. Воронеж, ул. Абсолютно Реальная 662 этаж,
            офис 288
          </p>
          <p>Телефон: +7-800-858-00-85</p>
        </div>
        <div className='footer_logo'>
          <img src={logo_footer} alt='Logo' className='footer-logo' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
