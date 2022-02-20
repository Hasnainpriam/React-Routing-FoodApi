import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  let {strMeal,idMeal,strMealThumb,strInstructions}=props.meal;
  return (
    <div className="col">
    <div className="card h-100">
      <img src={strMealThumb} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
        <p className="card-text">{idMeal}</p>
        <p className="card-text">{strInstructions.slice(0,350)}</p>
        <Link to={`/meal/${idMeal}`}><Button variant="warning">View Details</Button></Link>
      </div>
    </div>
  </div>
  );
};

export default Meal;