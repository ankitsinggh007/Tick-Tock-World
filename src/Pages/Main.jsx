import React from 'react'
import classes from "./Main.module.css"
import image from "../Media/image1.jpg"
import ProductList from '../Components/ProductList'
import { Category } from '../Components/Category'
import Footer from '../Components/Footer'
function Main() {
  return (
    <div className={classes.container}>
        <div className={classes.Banner} >
        "Time to shine with our fine timepieces!"
        </div>
        <ProductList attribute={"New"} headingTitle="NEW PRODUCT LISTS" productType="new" />

        <Category/>
      <ProductList attribute={"Popular"} headingTitle="POPULAR PRODUCT LISTS" productType="popular" />
      <Footer/>

    
    </div>
  )
}

export default Main