import React, {createContext, useContext, useState} from "react";
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  const [checkedServices, setCheckedServices] = useState([])
  const [page, setPage] = useState(1)
  
  
  return (<CartContext.Provider value={{
    checkedServices, setCheckedServices,
    page, setPage
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};