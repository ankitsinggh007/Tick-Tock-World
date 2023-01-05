import React, {useState, useContext } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import {HiShoppingCart} from "react-icons/hi"
import {BsFillHeartFill} from "react-icons/bs"
import classes from "./Navbar.module.css"
import Logo from "../Media/watchLogo.png"
import { Link } from 'react-router-dom'
import Context from '../ContextAPI'
function Navbar() {
  const {Registration,setRegistration,UserData, setUserData,isAuthorized,setisAuthorized}=useContext(Context);
  const Toggle=()=>{
    if(isAuthorized){
      setUserData({
        Firstname:"",
        Email:"",
        Wishlist:[],
        Cart:[]
      })
      setisAuthorized(false);
    }
  }
  console.log(isAuthorized,"isAuthorized")
  return (
    <div className={classes.container}>
        <span><img src={Logo} height={"70rem"}/></span>
      
      <div className={classes.items}>
        <div>Products</div>
        <div><BsFillHeartFill fontSize={".8em"} style={{marginTop:"7px"}}/></div>
        <div><HiShoppingCart fontSize={".8em"} style={{marginTop:"7px"}}/></div>

        <Link to={"/login"} onClick={Toggle} style={{color:"white",textDecorationLine:"none"}}>{isAuthorized?<Avatar
  sx={{ bgcolor: deepOrange[500] }}
  alt={UserData.Firstname}
  src="/broken-image.jpg"
/>
:"Log In/Register"}</Link>
      </div>
    </div>
  )
}

export default Navbar