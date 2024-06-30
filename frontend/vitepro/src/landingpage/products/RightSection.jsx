import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5 p-3">
      <div className="row">
        
        <div className="col-6 p-5 mt-5">
          <h1 className='p-3'>{productName}</h1>
          <p className='p-3'>{productDesription}</p>
          <div>
            <a href={learnMore} className='p-3' style={{ textDecoration: "none" }}>Learn More<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;