import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5 '>
            <div className='row mt-5'>
                <div className='col-1'>
                    
                </div>
                <div className='col-5'>
                <img src='images/index-education.svg' style={{width:"80%"}}/>
                </div>

                <div className='col-6 text-start mb-5'>
                    <h2>Free and open market education</h2>
                    <p className='mt-4 mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''>Varsity<i className="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-3 mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''>TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;