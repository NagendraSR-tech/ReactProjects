import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './container/Header';
import FoodList from './container/FoodList';
import FoodDetail from './container/FoodDetail';

function App() {

  return (
    // <React.Fragment>    
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<FoodList />}></Route>
          <Route path='/food/:foodId' element={<FoodDetail />}></Route>
          <Route>404 Not found</Route>
        </Routes>
    </Router>
    // </React.Fragment>
  )
}

export default App;
