import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Main from '../Pages/Main'
import Signup from "../Pages/Signup"
import ProductCatalog from "../Components/ProductCatalog"
function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/ProductAll' element={<ProductCatalog/>}/>
      </Routes>
    </div>
  )
}

export default router