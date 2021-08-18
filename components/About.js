import React from "react";
import PicCard from "./PicCard";
import capySolo from "./assets/capysolo.jpg";

const About = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-2 align-self-center">
          <PicCard
              picture={capySolo}
              altDesc="dish"
              cardText="This will be for putting pics of the studio"
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">Lia's Story</h5>
              <p className="card-text">
                <p>
                  I started making ceramics in November 2020, but I've lived a
                  life full of art. While making that first piece, a gift for a
                  friend, I quickly realized that all of my other art practices
                  lent well to ceramics.
                </p>

                <p>
                  Animals primarily feature in my work, as they're something
                  that truly bring me joy and peace. This is why a percentage of
                  my earnings on every piece goes to animal rescues!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <PicCard
              picture={capySolo}
              altDesc="dish"
              cardText="This will be for putting pics of the studio"
            />
          </div>
          <div className="col">
            <PicCard
              picture={capySolo}
              altDesc="dish"
              cardText="This will be for putting pics of the studio"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col">2 of 3</div>
          <div className="col">3 of 3</div>
        </div>
      </div>
    </div>
  );
};

export default About;
