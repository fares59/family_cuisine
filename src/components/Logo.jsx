import React from "react";

const Logo = () => {
  return (
    <div id="logo_box">
      <div className="d-flex" id="logo">
        <img src="logo.png" alt="logo cuisine" />

        <div className="d-flex flex-column ms-5 ms-sm-0">
        <h3>Family</h3>
        <h3>Cuisine</h3>

        </div>

      </div>
    </div>
  );
};

export default Logo;
