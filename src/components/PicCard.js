import React from "react";

const PicCard = ({picture, altDesc}) => {
  return (
    <div className="card">
      <img src={picture} className="card-img-top img-thumbnail pCard" alt={altDesc} />
    
    </div>
  );
};

export default PicCard;