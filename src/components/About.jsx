import { Link } from "react-router-dom";



function About(){
  return(<>
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
    <div className="section1-about1">
      <div className="container">
        <p>You won't be able to resist the delicious taste of our dishes... Treat yourself to an exceptional dining experience!</p>
        <p>With every bite, embark on a delectable journey into a world of flavors!</p>
        <p>Authentic taste that lasts... Our food is made with love!</p>
        <p>Don't miss out... Order now before it's gone!</p>
        <p>Our shawarma... It's not just food, it's a story from the very first bite!</p>
        <p>Amazing flavors and impeccable service. Unforgettable food...</p>
        <p>Unmatched food quality; every dish showcases meticulous attention to detail...</p>
        <p>A sophisticated atmosphere, delicious taste, and excellent service...</p>
      </div>
    </div>
  </>);
}

export default About;