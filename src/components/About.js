import React from "react";
import PicCard from "./PicCard";
import capySolo from "./assets/capysolo.jpg";

const About = () => {
  return (
    <div className="main">
      <div className="container overflow-hidden">
        <div className="row gy-4 justify-content-md-center">
          <div className="col-md-4 align-self-center">
          <img className="img-fluid" src={capySolo} altDesc="dish" />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">Lia's Story</h5>
              <p className="card-text">
                I started making ceramics in November 2020, but I've lived a
                life full of art. An attempt at making a gift for a friend
                helped me realize that all of my other art practices lent well
                to ceramics.
                <br />
                <br />
                Animals are the prime subjects of my works. Caring for and
                raising a variety of animals taught me empathy and the value of
                unspoken communication. I hope to impart each of my works with
                the adorable qualities and quirks of the animal they portray. To
                give back for all the things they've taught me, I'm dedicating a
                percentage of all my earnings to animal rescues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row g-2">
          <div className="col-lg-3">
            <PicCard picture={capySolo} altDesc="dish" />
          </div>
          <div className="col-lg-3">
            <PicCard picture={capySolo} altDesc="dish" />
          </div>
          <div className="col-lg-3">
            <PicCard picture={capySolo} altDesc="dish" />
          </div>
          <div className="col-lg-3">
            <PicCard picture={capySolo} altDesc="dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
