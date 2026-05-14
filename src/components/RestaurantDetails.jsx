import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Home.css';


function RestaurantDetails(){
    const{id}=useParams();
    const[data,setData]=useState(null);
    const [relatedMenus, setRelatedMenus]=useState([]);
    const [sweet,setSweet]=useState([]);
    const [drinks,setDrinks]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error, setError]=useState(null);
    

    useEffect(()=>{
        setLoading(true);
        setData(null);
     fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
     .then(json => {
         if (json && json.meals) {
                    const meal = json.meals[0];
                    setData(meal);
             return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=Side`);
         }else {
                    throw new Error("Meal not found");
                }
     })
     .then(res => res?res.json():null)
     .then(json => {
         if(json&&json.meals) {
             setRelatedMenus(json.meals.slice(0, 4));
         }
         setLoading(false);
     })
     .catch(err => console.log("Fetch error:", err));
     setLoading(false);
    },[id]);
    useEffect(()=>{ 
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
        .then(res => res.json())
        .then(json => {
            if (json && json.meals) {
                const filteredSweets = json.meals.filter(item =>
                    item.strMeal.toLowerCase().includes('ice cream') ||
                    item.strMeal.toLowerCase().includes('chocolate')
                );
                setSweet(filteredSweets.slice(0, 4));
            }
        })
        .catch(err => console.log("Error in bringing sweets:", err));
     })
   useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    .then(res => res.json())
    .then(json => {
        if (json && json.drinks) {
            const mapped=json.drinks.map(drink => ({
                idMeal: drink.idDrink,
                strMeal: drink.strDrink,
                strMealThumb: drink.strDrinkThumb
            }));
            setDrinks(mapped.slice(0, 4));
        }
    })
    .catch(err => console.log("Error in bringing drinks:", err));
   })  
    if(!data)return<div className="mt-5"><h1 className="text-center text-Secondary mt-5">Loading Restaurant...</h1></div>;
   const price = (parseInt(data.idMeal) % 100) + 50;
  return(<>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <img src={data.strMealThumb} alt={data.strMeal} className="img-fluid"/>
            </div>
            <div className="col-lg-6 col-md-6 content">
                <h2>{data.strMeal}</h2>
               <h3 className="text-danger">Price: {price} EGP</h3>
                <p className="lead text-muted">Category: {data.strCategory}</p>
                <p><strong>Title :</strong> {data.strMeal}</p>
                <p><strong>Country:</strong> ⭐ {data.strArea}</p>
                <p style={{ maxHeight: '200px', overflowY: 'auto' }}><strong>Instructions:</strong><br />{data.strInstructions}</p>
                <button className="btn ms-3"><Link to="/explorefoods">Order Now</Link></button>
            <button className="btn btn-outline-secondary ms-5"><Link to="/">Back to Home</Link></button>
            </div>
        </div>
    </div>
    <div className="container mt-5 mb-5">
        <h3 className="mb-4 text-success">Suggested side dishes ( Recommended side dishes)</h3>
        <div className="row">
            {relatedMenus.map((meal) => (
                <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <Link to={`/restaurant/${meal.idMeal}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className="container">
        <h3 className="mb-4 text-success">Suggested dessert (ice cream and chocolate)</h3>
        <div className="row">
            {sweet.map((meal) => { 
             const dessertPrice = (parseInt(meal.idMeal) % 50) + 40;
            return (
                <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title text-truncate">{meal.strMeal}</h5>
                            <h6 className="text-danger fw-bold">{dessertPrice} EGP</h6>
                            <Link to={`/restaurant/${meal.idMeal}`} className="btn btn-primary btn-sm mt-2">View Details</Link>
                        </div>
                    </div>
                </div>
            );
})}
        </div>
    </div>
    <div className="container">
        <h3 className="mb-4 text-success">Suggested drinks (cocktails)</h3>
        <div className="row">
            {drinks.map((meal) => { 
                const drinkPrice=(parseInt(meal.idMeal)%50)+40;
                return(
             <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{meal.strMeal}</h5>
                            <h6 className="text-danger fw-bold">{drinkPrice} EGP</h6>
                            <Link to={`/restaurant/${meal.idMeal}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
                );
})}
        </div>
    </div>
    </>)
}
export default RestaurantDetails;