import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
 
  <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFFF"}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src='images/logo.svg'style={{width:"30%"}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" aria-current="page" to="http://localhost:3000">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" to="/product">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" to="/pricing">Princing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" to="/support">Support</Link>
        </li>
        <li className=''>
        </li>
        <li class="nav-item">
          <Link class="nav-link active p-3 mr-5" to="/payment">Payment</Link>
        </li>
        <li className='p-3 ml-9'>
        <i className="fa-solid fa-bars"></i></li>
      
      </ul>
      </form>
    </div>
  </div>
</nav>


     );
}

export default Navbar;
