import React from "react";
import "./homepage_body.css";

function Pluses() {
  return (
    <div className="body">
      <div className="container">
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
      </div>
    </div>
  );
}

export default Pluses;

