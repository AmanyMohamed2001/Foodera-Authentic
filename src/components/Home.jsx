import { Link } from 'react-router-dom';
import './Home.css';
import React from 'react';
import About from './About';
import { useState,useEffect } from 'react';
import ExampleCarouselImage from './ExampleCarouselImage';

function Home(){
  const[restaurants,setRestaurants]=useState([]);
   const [items, setItems] = useState([]);
  useEffect(()=>{
     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      .then(res=>res.json())
     .then(json=>{setRestaurants(json.meals)
      console.log("Data received:", json);
        if (json.meals) {
          setRestaurants(json.meals); 
        }
    })
    .catch(err=>console.log("Fetch error:", err));
  },[]);
  useEffect(()=>{
    Promise.all([
      fetch(`themealdb.com`),
      fetch(`thecocktaildb.com`)
    ])
   .then(async ([resDessert, resDrinks]) => {
      const dessertData = await resDessert.json();
      const drinkData = await resDrinks.json();
      const filteredSweets = (dessertData.meals || []).filter(item => 
        item.strMeal.toLowerCase().includes('ice cream') || 
        item.strMeal.toLowerCase().includes('chocolate')
      );
      const drinks = drinkData.drinks || [];
      setItems([...filteredSweets, ...drinks]);
    })
    .catch(err => console.log("Promise.all error:", err));
    },[]);
  return (<>
  <header className='header-home'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 mt-5 header-contact'>
        <h2>Good food choices are good investments.</h2>
       <p>Welcome to our food exploration journey!</p>
       <p>The best restaurant isn't just a place to eat; it's a complete experience encompassing authentic flavor, quality, and nothing else. Its atmosphere is creative and inviting, where every dish tells an unforgettable taste story. It's a place where you'll notice meticulous attention to every detail, from the cuisine to the presentation.</p>
       <button className='btn btn-primary me-3'><Link to="/explorefoods">Order Now</Link></button>
        <button className='btn btn-primary'><Link to="/explorefoods">Learn More</Link></button>
        </div>
      </div>
    </div>
  </header>
  <section className="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h3>1287+</h3>
          <p>Oriental Grill</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>5786+</h3>
          <p>Fast Food</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>1440+</h3>
          <p>International cuisine</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>7110+</h3>
          <p>customers</p>
        </div>
      </div>
    </div>
   </section>
      <div className="section-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src="/images/1.91adf8dc0779a423e014.png" alt="About Us" />
          </div>
          <div className="col-lg-6 col-md-6">
            <h3>We pride ourselves on making real food from the best ingredients.</h3>
            <p>Our secret to success is our commitment. We pride ourselves on serving dishes made with fresh, natural, and high-quality ingredients, offering authentic food that you deserve...</p>
            <button className="btn"><Link to="/menu" className="btn-link">View Our Menu</Link></button>
          </div>
        </div>
    </div>
    </div>
      <div className="section-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <h3>We make everything by hand with the best possible ingredients.</h3>
              <p>In a world of machines, we choose the path of handcraft. We believe that things made slowly and carefully, using the purest and finest ingredients, possess a unique spirit and beauty.
                From our hands... to your hearts. We create everything with love, care, and the best ingredients you deserve.</p>
                <button className='btn'><Link to="/explorefoods">Order Now</Link></button>
            </div>
            <div className="col-lg-8 col-md-8">
              <img src="/images/2.b810024430d376b6bd6d.png" alt="Home" />
            </div>
          </div>
        </div>
      </div>
      <div className="section1-home1">
        <div className="container">
          <h2>It means that true happiness is not in accumulating money, but in having enough to sustain life and bring peace of mind.</h2>
          <p>The simplicity of life: This indicates that the true needs of the soul are few, and that a full stomach is the first step to peace of mind, whether the food is eaten in a palace or a humble hut...</p>
          <p>The reality of human equality: When a person's stomach is full (having obtained their basic sustenance), the rich and the poor are equal in feeling comfortable and content, and worldly worries and displays of ostentation fade away.</p>
          <button className='btn'><Link to="/explorefoods">Order Now</Link></button>
        </div>
      </div>
      <section className='section2-home2'>
        <div className="container">
          <div className="row">
            {restaurants.slice(0, 3).map((item, index)=>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="card ms-3 me-2 shadow-sm">
                <img src={item.strMealThumb} alt={item.strMeal} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.strMeal}</h5>
                  <p className="card-text">{item.strInstructions}</p>
                  <button className='btn'><Link to={`/restaurant/${item.idMeal}`}>Learn More</Link></button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
      <div className="section3-home3 mb-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-4">Discover the best restaurants in the world ...</h2>
          <ExampleCarouselImage />
        </div>
      </div>
      <div className="section4-home4 mb-5 mt-5">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="row section4-home4-row">
            <div className="col-lg-6">
              <h4>Is Foodera Bread really baked fresh each day?</h4>
              <p>Yes, our bread is baked fresh every day using traditional methods to ensure the best taste and quality.</p>
            </div>
            <div className="col-lg-6">
              <h4>How do I place an order?</h4>
              <p>You can place an order through our website or by calling our customer service number.</p>
            </div>
            <div className="col-lg-6">
              <h4>What is your return policy?</h4>
              <p>We offer a 30-day return policy on all products. Please refer to our website for more details.</p>
            </div>
            <div className="col-lg-6">
              <h4>Do you provide delivery services?</h4>
              <p>Yes, we provide delivery services to most areas within our operating region.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section7-home7">
        <div className="container">
         <div className="row">
          {items.slice(0, 4).map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img src={item.strMealThumb || item.strDrinkThumb} alt={item.strMeal || item.strDrink} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.strMeal || item.strDrink}</h5>
                  <p className="card-text">{item.strInstructions || item.strDescription}</p>
                </div>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
      <div className="section5-home5 mt-5 mb-5">
        <div className="section5-home5-img">
          <div className="section5-home5-text">
            <h4>Baked Fresh daily by bakers with passion</h4>
          <Link to="" className='btn btn-praimary'>Learn More</Link>
          </div>
        </div>
      </div>
      <div className="section6-home6 mb-5 mt-5">
        <div className="container text-center">
          <h2>Hurry up! Subscribe to our newsletter and get 25% off</h2>
          <p>Limited time offer for this month. No credit card required.</p>
          <div className="input-group mb-3 mx-auto">
            <input type="email" className="form-control" placeholder="Enter your email" />
            <Link to="https://wa.me/201090409021" className="btn btn-primary" type="button">Subscribe</Link>
          </div>
        </div>
      </div>
  </>);
}

export default Home;