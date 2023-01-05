import React from 'react'
import classes from "./ProductCatalog.module.css"
import Product from "../products"
import {HiShoppingCart} from "react-icons/hi"
import {BsFillHeartFill} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
function ProductCatalog() {
  
    return (
    <div className={classes.Container}>
{
    Product.map((obj,index)=>{
        return(
            <div className={classes.Product} key={index}>
            <img src={obj.image}/>
            <label className={classes.title}>{obj.title}</label>
            <span className={classes.PriceDetails}>
                <span className={classes.Price} >₹{obj.price}</span>
                <strike className={classes.ActualPrice}>₹{obj.mrpPrice}</strike>
                <span className={classes.Discount}>{obj.offer[0]}</span>
                <span className={classes.Rating}>{obj.rating}<AiFillStar fontSize=".9rem"/></span>
            </span>
            <span className={classes.Purchase}>
                <span className={classes.AddToCart} id={obj.id}><HiShoppingCart/> Add To Cart</span>
                <span className={classes.Wishlist}><BsFillHeartFill /> Wishlist</span>
            </span>
        </div>
        )
    })
}      
    </div>
  )
}

export default ProductCatalog