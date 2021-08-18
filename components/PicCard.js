import React from "react";

const PicCard = ({picture, altDesc, cardText}) => {
  return (
    <div className="card" style={{width: "18rem;"}}>
      <img src={picture} className="card-img-top" alt={altDesc} />
      
    </div>
  );
};

export default PicCard;