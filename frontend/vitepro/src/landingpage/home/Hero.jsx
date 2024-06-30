import React from 'react';
function Hero() {
    return (
        <div className='container p-2 mb-5 mt-5' >
          <div className='row text-center'>
           
            
              <img src='images/landing.png' alt='HeroImg' className='mb-4'></img>
             
              
              <h1 className='mt-3'>Invest in everything</h1>
              <p className='mt-5 mb-5 fs-5'>
              Online platform to invest in stocks, derivatives, mutual funds, and more
              </p>

              <button className='p-2 btn btn-primary fs-5'style={{width:"20%",margin:"0 auto"}}>
               Signup Now
              </button>
            
          </div>

        </div>
      );
}

export default Hero;