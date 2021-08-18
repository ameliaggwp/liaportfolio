import React from "react";
import corgi from "./assets/corgibutt.jpg";
import capySolo from "./assets/capysolo.jpg";
import smolBois from "./assets/smolbois.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={corgi} alt="corgi but shaped plate" width="300px" height="auto"/>
        </div>
        <div className="col">
          <img src={capySolo} alt="Capybara ring dish" width="300px" height="auto" />
        </div>
        <div className="col">
          <img src={smolBois} alt="small animal planters" width="300px" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
