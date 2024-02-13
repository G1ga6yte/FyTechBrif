import React from 'react';
import ReactDOM, {createRoot} from "react-dom/client";
import './index.css';
import {CartProvider} from "./CartContext";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./styles/font/font1.scss"
import "./styles/mixin.scss"
import "./styles/Global.scss"
import "./i18n"


function Root() {
  return (
     <>
       <App/>
     </>
  )
}

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <CartProvider>
       
       <Root />
     
     </CartProvider>
   </BrowserRouter>,
);


