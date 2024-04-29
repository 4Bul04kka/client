import React from "react";
import { Link } from "react-router-dom";
import ".//events.css";

function Events() {
  return (
    <div className="events">
      <div className="container">
        <h1 className="events-header">Мероприятия</h1>
      </div>
      <div className="container">
        <div className="events-blocks">
          <Link to="#!" className="events-block-link">
            <div className="events-block">
              <p className="events-block-text">Text piece 1</p>
            </div>
          </Link>
          <Link to="#!" className="events-block-link">
            <div className="events-block">
              <p className="events-block-text">Text piece 2</p>
            </div>
          </Link>
          <Link to="#!" className="events-block-link">
            <div className="events-block">
              <p className="events-block-text">Text piece 3</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;