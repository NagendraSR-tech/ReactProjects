import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedFood } from '../actions';
import { Link } from 'react-router-dom';

const FoodDetail = () => {
  const food = useSelector((state) => state.food);
  const { title, details, recipe } = food;

  const { foodId } = useParams();
  const dispatch = useDispatch();
  // console.log(foodId)
  // console.log(food)

  const fetchFoodDetail = async () => {
    const response = await axios.get(`http://localhost:4001/foods/${foodId}`)
      .catch(err => console.log("Err", err));

    dispatch(selectedFood(response.data));
  };

  useEffect(() => {
    if (foodId && foodId !== "") fetchFoodDetail();
    // dispatch (if (foodId && foodId !== "") fetchFoodDetail());
  }, [foodId])

  return (
    <div className='container'>
      <div className='row'>
        <h3 className="mb-0 py-3 text-start">{title}</h3>
        <p className="card-text mb-3"><strong>Details:</strong> {details}</p>
        <p className="card-text"><strong>Recipe:</strong> {recipe}</p>
      </div>
      <br/>
      <Link to="/" className="btn btn-primary btn-sm"> Back</Link>
    </div>
  )
}

export default FoodDetail