import React from "react";

const StampCard = () => {
  return (
    <div className="container-sm overflow-hidden">
      <div className="row g-2 justify-content-center align-self-center">
        <div className="col-4">
          <i className="bi bi-check-circle-fill" style={{fontSize: '2rem' , color: 'seaGreen'}}></i>
          $25 Wee Companions Small Animal Adoption
        </div>
        <div className="col-4">
          <i className="bi bi-check-circle-fill" style={{fontSize: '2rem' , color: 'seaGreen'}}></i>
          $25 A New Life Charitable Foundation
        </div>
        <div className="col-4"><i class="bi bi-cash-coin" style={{fontSize: '2rem' }}><br /></i></div>
      </div>
      <div className="row g-2 justify-content-center align-self-center">
        <div className="col-4"><i class="bi bi-cash-coin" style={{fontSize: '2rem' }}><br /></i></div>
        <div className="col-4"><i class="bi bi-cash-coin" style={{fontSize: '2rem' }}><br /></i></div>
        <div className="col-4"><i class="bi bi-cash-coin" style={{fontSize: '2rem' }}><br /></i></div>
      </div>
    </div>
  );
};

export default StampCard;
