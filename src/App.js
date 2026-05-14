import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ExploreFoods from './components/Explorefoods';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import RestaurantDetails from './components/RestaurantDetails';
import Footer from './components/Footer';
import {CartProvider} from './components/CartContext';
import Contact from './components/Contact';

function App() {
  return (<>
  <Navbar/>
  <CartProvider>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/explorefoods' element={<ExploreFoods/>}/>
    <Route path='/menu' element={<FAQ/>}/>
    <Route path='/payment' element={<Reviews/>}/>
    <Route path="/restaurant/:id" element={<RestaurantDetails />} />
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </CartProvider>
  <Footer/>
  </>);
}

export default App;
