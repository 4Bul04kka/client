import React from "react";
import "./homepage_body.css";
import temp from "./../../img/homepage_contents/image8.png";

function Homepage_body() {
  return (
    <div className="body">
      <div className="block">
        <h2 className="block-header">РАЗРАБОТКА САЙТОВ</h2>
        <div className="block-row">
          {/* Repeat the following div for each of the three blocks */}
          <div className="block-item">
              <h3 className="block-item-header">Header</h3>
              <img src={temp} alt="Image" className="block-item-image" />
              <p className="block-item-text">Short text description</p>
              <h3 className="block-item-header">Header</h3>
              <img src={temp} alt="Image" className="block-item-image" />
              <p className="block-item-text">Short text description</p>
              <h3 className="block-item-header">Header</h3>
              <img src={temp} alt="Image" className="block-item-image" />
              <p className="block-item-text">Short text description</p>
            </div>
        </div>
      </div>

      <div className="block">
        <h2 className="block-header">НАШИ НОВОСТИ</h2>
        <div className="block-row">
          {/* Repeat the following div for each of the three blocks */}
          <div className="block-item">
            <img src={temp} alt="Image" className="block-item-image" />
            <p className="block-item-text">Short text description</p>
            <img src={temp} alt="Image" className="block-item-image" />
            <p className="block-item-text">Short text description</p>
            <img src={temp} alt="Image" className="block-item-image" />
            <p className="block-item-text">Short text description</p>
          </div>
        </div>
      </div>

      <div className="block">
        <h2 className="block-header">НАШИ ДОСТОИНСТВА</h2>
        <div className="block-table">
          <div className="block-table-row">
            {/* Repeat the following div for each of the three text pieces in the first row */}
            <div className="block-table-cell">
              <p className="block-table-text">Text Piece</p>
            </div>
          </div>
          <div className="block-table-row">
            {/* Repeat the following div for each of the three text pieces in the second row */}
            <div className="block-table-cell">
              <p className="block-table-text">Text Piece</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block">
        <h2 className="block-header">О НАС</h2>
        <div className="block-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            commodo, magna in fermentum tincidunt, libero ipsum venenatis odio,
            vel lacinia nisi nisl eget nibh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage_body;
