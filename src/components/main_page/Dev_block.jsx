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
                <h2>Header</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Short text description</p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <h2>Header</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Short text description</p>
              </a>
            </li>
            <li className="block-item">
              <a href="#!">
                <h2>Header</h2>
                <img src={temp} alt="Image" className="block-item-image" />
                <p className="block-item-text">Short text description</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dev_block;
