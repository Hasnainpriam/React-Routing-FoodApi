import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MealDetail = () => {
  let {mealId}=useParams();
  let url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  const [mealDetail,setMealDetail]=useState({})


  useEffect(()=>{ 
    fetch(url)
    .then(res => res.json())
    .then(data => setMealDetail(data.meals[0]))
  },[])

  return (  
    <>
    <h1 className='my-5'>Meal Id : {mealId}</h1>
    <div className="card mb-3 container" >
      <div className="row g-0">
    <div className="col-md-4">
      <img src={mealDetail.strMealThumb} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-3">Name : {mealDetail.strMeal}</h5>
        <p className="card-text">{mealDetail.strInstructions }</p>
        <p className="card-text"> Youtube Link: {mealDetail.strYoutube } </p>
        <p className="card-text"><strong className="text-muted">Origin : {mealDetail.strArea}</strong></p>
        <Link to='/home'><Button variant="outline-dark">Back To Home</Button></Link> {' '}
        <Link to='/restaurant'><Button variant="outline-dark">Previous</Button></Link> {' '}
      </div>
    </div>
  </div>
</div>
              
    </>
  );
};

export default MealDetail;