import React from "react";
import "./homepage_body.css";

function About_us() {
  return (
    <div className="body">
      <div className="container">
        <div className="block">
          <h2 className="about-us-header">О НАС</h2>
          <div>
            <p className="about-us-text">
            Ну типо какой-то осмысленный текст содержащий информацию о достоиствах нашей компании и почему именно её стоит выбрать среди массы конкурентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us;
