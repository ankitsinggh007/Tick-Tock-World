import React, { useContext, useEffect, useState } from 'react'
import classes from "./ProductCatalog.module.css"
import Product from "../products"
import { HiShoppingCart } from "react-icons/hi"
import { BsFillHeartFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import { useNavigate, useParams } from 'react-router-dom'
import {TbDiscount2} from "react-icons/tb"
import Context from '../ContextAPI'
import Swal from 'sweetalert2'
import { doc, updateDoc } from "firebase/firestore";
import db from '../Firebase';
import { User } from '../App';
import {TbTruckDelivery} from "react-icons/tb"

function ProductCatalog() {
    const { Categories } = useParams();
    const navigate=useNavigate();
  const {LoggedInUserData,setLoggedInUserData} = useContext(User)

    const [Data, setData] = useState([]);
    useEffect(() => {
        if (Categories === "ProductAll") {
            setData(Product);
        }
        else if (Categories === "Man") {
            const array = Product.filter((obj) => obj.categoryName === "man");
            setData(array);
        }
        else if (Categories === "Women") {
            const array = Product.filter((obj) => obj.categoryName === "woman");
            setData(array);
        }
    }, [])

    const Addtolist= async(obj,e)=>{
        if(LoggedInUserData.isAuthrized){
            const obj1={...LoggedInUserData,Liked:[...LoggedInUserData.Liked,obj]}
            setLoggedInUserData({...obj1});
  const washingtonRef = doc(db, "User", LoggedInUserData.id);
  await updateDoc(washingtonRef, {
    Liked:obj1.Liked,
  });
  await Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Added in wishlist',
    showConfirmButton: true,
  })
  navigate("/wishlist")
        }
        else{
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'please Login to Add in wishlist',
                showConfirmButton: true,
              })
              navigate("/login")
        }
    }
    const AddtoCatr=async (obj,e)=>{
        if(LoggedInUserData.isAuthrized){
            const obj1={...LoggedInUserData,Cart:[...LoggedInUserData.Cart,obj]}
            setLoggedInUserData({...obj1});
  const washingtonRef = doc(db, "User", LoggedInUserData.id);
  await updateDoc(washingtonRef, {
    Cart:obj1.Cart,
  });
  await Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Added in Cart',
    showConfirmButton: true,
  })
  navigate("/wishlist");
        }
        else{
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'please Login to Add in Cart',
                showConfirmButton: true,
              })
              navigate("/login")
        }

    }
    return (
        <div className={classes.Container}>
            {Data.length !== 0 &&
                Data.map((obj, index) => {
                    return (
                        <div className={classes.Product} key={index}>
                            <img src={obj.image} />
                            <label className={classes.title}>{obj.title}</label>
                            <span className={classes.PriceDetails}>
                                <span className={classes.Price} >₹{obj.price}</span>
                                <strike className={classes.ActualPrice}>₹{obj.mrpPrice}</strike>
                               
                            </span>
                            <div className={classes.Rate}>
                            <span className={classes.Discount}><TbDiscount2  style={{marginTop:"6px"}}/>{obj.offer[0]}</span>
                                <span className={classes.Rating}>{obj.rating}<AiFillStar fontSize=".9rem" /></span>
                            </div>
                            <span className={classes.fast}><TbTruckDelivery/> Fast Delivery </span>
                            <span className={classes.Purchase}>
                                <span onClick={(e)=>AddtoCatr(obj,e)} className={classes.hover} id={obj.id}><HiShoppingCart /> Add To Cart</span>
                                <span onClick={(e)=>Addtolist(obj,e)} className={classes.Wishlist}><BsFillHeartFill /> Wishlist</span>
                            </span>
                        </div>
                    )
                })
            }
            {
                Data.length === 0 &&
                <span className={classes.Spinner}></span>
            }
        </div>
    )
}

export default ProductCatalog