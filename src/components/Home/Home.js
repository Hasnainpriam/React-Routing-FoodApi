import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div> 
        <div class="back-image position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
             <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 fw-bold">Search Your Food</h1>
                <p class="lead font-weight-normal">To see the funtionalities of this website , </p>
                <p class="lead font-weight-normal"> Click <strong>Search Menu</strong> button</p>
                <Link to='/home'><Button variant="warning">Home</Button>{' '}</Link>
                <Link to='/restaurant'><Button variant="warning">Search Menu</Button>{' '}</Link>
                <Link to='/about'><Button variant="warning">About</Button>{' '}</Link>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
    </div>
  );
};

export default Home;