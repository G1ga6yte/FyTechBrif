import React, {createContext, useContext, useState} from "react";
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  const [checkedServices, setCheckedServices] = useState([])
  const [page, setPage] = useState(1)
  const [font, setFont] = useState(false)
  
  
  return (<CartContext.Provider value={{
    checkedServices, setCheckedServices,
    page, setPage, font, setFont
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};