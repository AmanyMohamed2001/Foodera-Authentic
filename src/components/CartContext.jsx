import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (meal) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find(item => item.idMeal === meal.idMeal);
      if (exists) return prevItems;
      return [...prevItems, meal];
    });
  };
 const removeFromCart = (idMeal) => {
    setCartItems((prevItems) => prevItems.filter(item => item.idMeal !== idMeal));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);