import React from 'react';
function Pricinghome() {
    return ( 
        <div className='container mb-5 mt-5'>
        <div className='row'>
            <div className='col-1'>

            </div>
            <div className='col-3 text-start'>
                <h2 classname='mb-5'>Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' >See pricing<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col-6 p-3 border'>
                        <h1 className='mb-1'>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col-6 p-3 border'>
                        <h1 className='mb-1'>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

     );
}

export default Pricinghome;