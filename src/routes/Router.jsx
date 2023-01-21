import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Main from '../Pages/Main'
import Signup from "../Pages/Signup"
import ProductCatalog from "../Components/ProductCatalog"
import Cart from "../Pages/Cart";
import Wishlist from "../Pages/Wishlist.jsx";

function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/:Categories' element={<ProductCatalog/>}/>
      <Route path={'/wishlist'} element={<Wishlist />}/>
      <Route path={'/cart'} element={<Cart/>}/>


      </Routes>
    </div>
  )
}

export default router