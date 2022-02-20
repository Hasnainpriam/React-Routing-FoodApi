import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
  const [text,setText]=useState('');
  const [meals,setMeals]=useState([]);

  useEffect(()=>{
     let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
      fetch(url)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  },[text])

  const handleChange=(event)=>{
    console.log(event.target.value);
    let textValue=event.target.value;
    setText(textValue);
  }


  return (
    <div>
       <h1 className="mt-3">Search your Favourite <span className='text-info'>Food</span> </h1>
       <div style={{width:'50%',margin:'50px auto'}}>
       <InputGroup className="mb-3">
          <FormControl
           onChange={handleChange}
           placeholder="Search your food here"
           aria-describedby="basic-addon1"
          />
       </InputGroup>
       </div>
       <div className="row row-cols-1 row-cols-md-3 g-4 ">
         {
           meals.map(meal => <Meal
            key={meal.idMeal}
            meal={meal}></Meal>)
         }
       </div>
    </div>
  );
};

export default Restaurant;