import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Explorefoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      .then(res => res.json())
      .then(json => {
        if (json.meals) {
          setFoods(json.meals);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log("Fetch Error: ", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="section-exploer mt-5 pt-5">
        <div className="container mt-5">
          <h1 className="text-danger">Explore Foods</h1>
          <p>Discover amazing dishes from around the world!</p>
          <button className="btn btn-danger">
            <Link to="/" className="text-white">Home</Link>
          </button>
        </div>
      </div>

      <div className="section1-exploer mt-5">
        <div className="container">
          {loading && <h2 className="text-center text-danger">Loading...</h2>}
          {!loading && foods.length === 0 && <h2 className="text-center text-muted">There is currently no data available in this section....</h2>}
          <div className="row">
            {foods.map((item) => { 
             const price = (item.idMeal % 100) + 50;
              return( 
                 <div key={item.idMeal} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img src={item.strMealThumb} alt={item.strMeal} className="card-img-top" style={{height: '220px', objectFit: 'cover'}} />
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2 p-2">{price} EGP</span>
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.strMeal}</h5>
                    <Link to="/oredernow" className="btn btn-primary">Order Now</Link>
                  </div>
                </div>
              </div>
              );
})}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explorefoods;
