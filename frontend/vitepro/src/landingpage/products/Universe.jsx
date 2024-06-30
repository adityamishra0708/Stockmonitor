import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
    <div className="row text-center p-3">
    <p className="text-center mt-5 mb-5 fs-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <h1>The Zerodha Universe</h1>
      <p className='p-3 mt-3 mb-5'>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="col-4 p-3">
        <img src="images/smallcase-logo.png" style={{width:"40",height:"40%"}}/>
        <p className="text-small text-muted">Thematic investment platform</p>
      </div>
      <div className="col-4 p-3">
        <img src="images/smallcase-logo.png" style={{width:"40",height:"40%"}}/>
        <p className="text-small text-muted">Algo & strategy platform</p>
      </div>
      <div className="col-4 p-3">
        <img src="images/sensibull-logo.svg"  style={{width:"30",height:"30%"}}/>
        <p className="text-small text-muted">Options trading platform</p>
      </div>
      <div className="col-4 p-3">
        <img src="images/zerodhafundhouse.png" style={{width:"30",height:"30%"}}/>
        <p className="text-small text-muted">Asset management</p>
      </div>
      <div className="col-4 p-3">
        <img src="images/tijori.svg" style={{width:"30",height:"30%"}}/>
        <p className="text-small text-muted">Fundamental research platform</p>
      </div>
      <div className="col-4 p-3">
        <img src="images/smallcase-logo.png" style={{width:"30",height:"30%"}}/>
        <p className="text-small text-muted">Insurance</p>
      </div>
      <button
        className="btn btn-primary fs-5 mb-5"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Signup Now
      </button>
    </div>
  </div>
  );
}

export default Universe;