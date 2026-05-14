import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="" src="/images/cf9ff520f6d5ac02901c97be68070d45.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Chef Anthony Bourdain</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum,American chef and author.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src="/images/9105ba3998b63aa723ebb36fb47ea1b6.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Julia Child</h3>
          <p>The new cook is like a witch who spreads happiness,A pioneer in French cuisine.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src="/images/298e3107edcc660af60d17de8fe0b24d.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Alaa El-Sherbiny</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur,A famous Egyptian chef.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;