import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodComponent from './FoodComponent';
import axios from 'axios';
import { setFoods } from '../actions';

const FoodList = () => {
  const foods = useSelector((state) => (state));
  const dispatch = useDispatch();

  // console.log(foods);
  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:4001/foods").catch((err) => {
      console.log("Err", err)
    })
    // console.log(response.data);
    // dispatch(response.data);
    dispatch(setFoods(response.data));
  };

  useEffect(() => {
    fetchFoods();
    // dispatch(setFoods())
  }, [])

  console.log("Foods: ", foods)

  return (
    <React.Fragment>
      <section>
        <h2 className='display-5 py-3'>Delicious Food items</h2>
        <main className='container'>
          <FoodComponent />
        </main>
      </section>
    </React.Fragment>
  )
}

export default FoodList