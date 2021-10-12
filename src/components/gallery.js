import React from "react";
import corgi from "./assets/corgibutt.jpg";
import capySolo from "./assets/capysolo.jpg";
import smolBois from "./assets/smolbois.jpg";
import picModal from "./picModal";

const Gallery = () => {
  return (
    <div>
      <picModal />
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={corgi}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="corgi butt plate"
          />

          <img
            src={capySolo}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="capybara ring dish"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={smolBois}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="smol bois"
          />

          <img
            src={corgi}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="corgi butt plate"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={capySolo}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="capybara ring dish"
          />

          <img
            src={smolBois}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="smolish boi"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
