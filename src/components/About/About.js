import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className='text-warning fw-bold my-5'>About Project</h1>
        </div>
        <div>
        <h1 className='my-3'>Description</h1> 
   
            <li>This is a Demo Food Searching website. In this webiste, i have used React-Bootstrap, React-Routing.</li>
            <li>MealDb Api is used for this project.</li>
            <li>If any specific path is not found , it will show tha Error Message.</li>
            <li>Searching happens with the typing. No need to hit Enter button.</li>
       

        <h1 className='my-3'>Overview</h1>
          <p>We can click any of the buttons on the Home page. By clicking the Menu Search button it will take us to the Search page. It will show the foods from the API matched with names. Then , if we need to see more details ,we can click the View Details. It will search the food with the ID in the Api. Then, show us the Details in new page.</p>
        </div>
      </div>
      <div className='mt-5'>
      <Link to='/home'><Button variant="warning">Home</Button>{' '}</Link>
      <Link to='/restaurant'><Button variant="warning">Search Menu</Button>{' '}</Link>
      <Link to='/about'><Button variant="warning">About</Button>{' '}</Link>
      </div>
      
     
    </div>
  );
};

export default About;<h1>About us</h1>