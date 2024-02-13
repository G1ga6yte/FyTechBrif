import React, {createContext, useContext, useState} from "react";
import i18n from "./i18n";
const CartContext = createContext();


export const CartProvider = ({children}) => {
  
  const [checkedServices, setCheckedServices] = useState([])
  const [page, setPage] = useState(1)
  const [font, setFont] = useState(false)
  const [lng, setLng] = useState(i18n.resolvedLanguage)
  
  
  return (<CartContext.Provider value={{
    checkedServices, setCheckedServices,
    page, setPage, font, setFont, lng, setLng
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};