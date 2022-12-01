import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FoodComponent = () => {
  const foods = useSelector((state) => (state.allFoods.foods));

  const renderFoodList = foods ? foods.map((fooddata) => {
    const { id, title, details, image } = fooddata
    return (
      <div key={id} className="row">
        <div className="col-md-12">
          <Link to={`food/${id}`}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img src={image} className="bd-placeholder-img" width="200" height="250" alt='delicious food' role="img" aria-label="Placeholder: Thumbnail"/>
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0 text-start">{title}</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">{details}</p>
                <Link to={`food/${id}`}>
                  <button type='button' className='btn btn-primary'>Details</button>                
              </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }) : null

  return (
    <React.Fragment>
      {renderFoodList}
    </React.Fragment>
  )
}

export default FoodComponent