import React from "react";
import PicCard from "./PicCard"
import corgi from "./assets/corgibutt.jpg";
import capySolo from "./assets/capysolo.jpg";
import smolBois from "./assets/smolbois.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PicCard picture={corgi} altDesc="corgi but shaped plate"/>
        </div>
        <div className="col">
          <PicCard picture={capySolo} altDesc="Capybara ring dish"  />
        </div>
        <div className="col">
          <PicCard picture={smolBois} altDesc="small animal planters" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
