import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NoyFound.css'
const NotFound = () => {
  return (
    <div>
       <div className="custom-container mx-auto">
          <div><h1>404</h1></div>
          <div className="imgBx"></div>
          <div className="detail">
            <h3>Look like you're Lost</h3>
            <span>the page you are looking for not available!</span>
            <Link to='/home'><Button>Home</Button></Link>
          </div>
        </div>
    </div>
  );
};

export default NotFound;