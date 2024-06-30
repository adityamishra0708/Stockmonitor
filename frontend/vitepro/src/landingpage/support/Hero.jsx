import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="p-5" id="supportWrapper">
        <h4 >Support Portal</h4>
        <a href="" className='fs-5'>Track Tickets</a>
      </div>
      <div className="row p-3">
        <div className='col-1'></div>
        <div className="col-5 p-3">
          <h2 className="fs-3 p-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg. how do I activate F&O" className='mb-3 mt-3'/>
          <br />
          <a href="" className='p-3'>Track account opening</a>
          <a href="" className='p-3'>Track segment activation</a>
          <a href="" className='p-3'>Intraday margins</a>
         <br/>
          <a href="" className='p-3'>Kite user manual</a>
        </div>
        <div className='col-1'></div>
        <div className="col-5 p-3">
          <h1 className="fs-3 p-3">Featured</h1>
          <ol>
            <li>
              <a href="" className='mt-5 mb-5'>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className='mt-5 mb-5'>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;