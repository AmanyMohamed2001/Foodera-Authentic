import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CartProvider, useCart} from "./CartContext";

function FAQ() {
  const [sides, setSides] = useState([]);
  const [sweets, setSweets] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [loadingSides, setLoadingSides] = useState(true);
  const [loadingSweets, setLoadingSweets] = useState(true);
  const [loadingDrinks, setLoadingDrinks] = useState(true);

  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=Side`)
      .then(res => res.json())
      .then(json => {
        if (json && json.meals) {
          setSides(json.meals);
        }
        setLoadingSides(false);
      })
      .catch(err => {
        console.log("Error fetching sides:", err);
        setLoadingSides(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
      .then(res => res.json())
      .then(json => {
        if (json && json.meals) {
          const filtered = json.meals.filter(item =>
            item.strMeal.toLowerCase().includes('ice cream') ||
            item.strMeal.toLowerCase().includes('chocolate')
          );
          setSweets(filtered);
        }
        setLoadingSweets(false);
      })
      .catch(err => {
        console.log("Error fetching sweets:", err);
        setLoadingSweets(false);
      });
}, []);

 useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
      .then(res => res.json())
      .then(json => {
        if (json && json.drinks) {
          const mapped = json.drinks.map(drink => ({
            idMeal: drink.idDrink,
            strMeal: drink.strDrink,
            strMealThumb: drink.strDrinkThumb
          }));
          setDrinks(mapped);
        }
        setLoadingDrinks(false);
      })
      .catch(err => {
        console.log("Error fetching drinks:", err);
        setLoadingDrinks(false);
      });
}, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div>
          <h1 className="text-danger">Frequently Asked Questions</h1>
          <p className="text-muted">Find answers to common questions about our food exploration journey.</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className='text-center text-success border-bottom pb-2 mb-4'>🍱 Main & Side Dishes ({sides.length})</h2>
        {loadingSides ? (<p className="text-muted">Loading dishes...</p>) : (
          <div className="row">
            {sides.map((meal) => {
              const price = (parseInt(meal.idMeal) % 100) + 50;
              return (
                <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => addToCart(meal)} />
                    <div className="card-body text-center">
                      <h5 className="card-title text-truncate">{meal.strMeal}</h5>
                      <h6 className="text-danger fw-bold">{price} EGP</h6>
                      <Link to={`/restaurant/${meal.idMeal}`} className="btn btn-primary btn-sm mt-2">View Details</Link>
                      <Link to="/payment" onClick={() => addToCart(meal)} className="btn btn-danger btn-sm mt-2 ms-2">Add To Card</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 text-warning border-bottom pb-2">🍦 Desserts & Ice Cream ({sweets.length})</h2>
        {loadingSweets ? (
          <p className="text-muted">Loading desserts...</p>
        ) : (
          <div className="row">
            {sweets.map((meal) => {
              const price = (parseInt(meal.idMeal) % 50) + 40;
              return (
                <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => addToCart(meal)} />
                    <div className="card-body text-center">
                      <h5 className="card-title text-truncate">{meal.strMeal}</h5>
                      <h6 className="text-danger fw-bold">{price} EGP</h6>
                      <Link to={`/restaurant/${meal.idMeal}`} className="btn btn-warning btn-sm mt-2 text-white">View Details</Link>
                      <Link to="/payment" onClick={() => addToCart(meal)} className="btn btn-danger btn-sm mt-2 ms-2">Add To Card</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 text-info border-bottom pb-2">🍹 Refreshing Cocktails ({drinks.length})</h2>
        {loadingDrinks ? (
          <p className="text-muted">Loading drinks...</p>
        ) : (
          <div className="row">
            {drinks.map((drink) => {
              const price = (parseInt(drink.idMeal) % 50) + 30;
              return (
                <div key={drink.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img src={drink.strMealThumb} alt={drink.strMeal} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => addToCart(drink)} />
                    <div className="card-body text-center">
                      <h5 className="card-title text-truncate">{drink.strMeal}</h5>
                      <h6 className="text-danger fw-bold">{price} EGP</h6>
                      <Link to={`/restaurant/${drink.idMeal}`} className="btn btn-info btn-sm mt-2 text-white">View Details</Link>
                      <Link to="/payment" onClick={() => addToCart(drink)} className="btn btn-danger btn-sm mt-2 ms-2">Add To Card</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default FAQ;
