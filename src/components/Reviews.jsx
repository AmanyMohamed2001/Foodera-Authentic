import { Link } from "react-router-dom";
import { CartProvider, useCart } from "./CartContext";
import React from "react";




function Reviews(){
  const {cartItems, removeFromCart}=useCart();
  return (<>
   <div className="container mt-5 mb-5">
      <h1 className="text-danger mt-2">Reviews</h1>
      <p className="mt-2">Read what others say about their food exploration experiences!</p>
    </div>
    <div className="container mt-5">
      <h2 className="text-truncate">Requests added for review({cartItems ? cartItems.length : 0})</h2>
      {cartItems.length===0?(<p className="text-danger">You haven't added any meals yet.</p>):(
        <div className="row">
          {cartItems.map((meal)=>(
            <div key={meal.idMeal} className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="card-body">
                  <h5>{meal.strMealT}</h5>
                  <p>Meal number :{meal.idMeal}</p>
                  <Link className="btn btn-danger btn-sm mt-2 ms-2" to="" onClick={() => removeFromCart(meal.idMeal)}>Remov Add Card</Link>
                  <Link className="btn btn-success btn-sm mt-2 ms-2" to="/contact">Order Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  
  </>);
}

export default Reviews;