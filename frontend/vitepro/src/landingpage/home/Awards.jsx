import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 mb-5' >
        <div className='row'>
          
            <div className='col-6 p-5 '>
                <img src='images/largest-broker.svg' style={{width:"80%"}}/>
            </div>
            <div className='col-6 p-5'>


                <h2 className='mb-3'>Largest stock broker in India</h2>


                <p className='mb-3'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                
                    <div className='col-6 mb-1'>
                    <ul>
                    <li><p>Currency derivatives</p></li>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li></ul>
                    </div>
                    <div className='col-6 mb-1'>
                        <ul>
                    <li><p>Bonds and Govt. Securities</p></li>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    
                </ul>
                
                    </div>
                    <img src='images/press-logos.png'/>
                </div>


                
            </div>
          
        </div>

      </div>
     );
}

export default Awards;