import React from 'react';
function Stats() {
    return ( 
          <div className='container mb-5 mt-5 p-5'>
            <div className='row mb-5'>
                <div className='col-6 text-start'>
                <h2 className='mt-5 mb-5'>Trust with confidence</h2>
<h3 className='fs-5'>Customer-first always</h3>
<p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

<h3 className='fs-5'>No spam or gimmicks</h3>
<p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

<h3 className='fs-5'>The Zerodha universe</h3>
<p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

<h3 className='fs-5'>Do better with money</h3>
<p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='images/ecosystem.png' style={{width:"85%"}}/>
                    <a href='' className='p-5 mr-5' >Explore our products<i className="fa-solid fa-arrow-right"></i></a>
                    <a href='' className='p-5 ml-5'>Try Kite demo<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
          </div>
     );
}

export default Stats;