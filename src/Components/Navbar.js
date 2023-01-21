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
import { Link, NavLink } from 'react-router-dom'
import Context from '../ContextAPI'
import { User } from '../App';
function Navbar() {
  const {LoggedInUserData,setLoggedInUserData} = useContext(User)
 
  const Toggle=()=>{
    if(LoggedInUserData.isAuthrized){
      setLoggedInUserData({
        Firstname:"",
        Email:"",
        Wishlist:[],
        Cart:[],
        isAuthrized:false
      })
    }
  }
  return (
    <div className={classes.container}>
        <NavLink to="/"><img src={Logo} className={classes.image}/></NavLink>
      
      <div className={classes.items}>
        <NavLink  to="/ProductAll" style={{textDecoration:"none",color :"white"}}>Products</NavLink>
        <NavLink className={classes.icon_set} to="/wishlist" style={{textDecoration:"none",color :"white"}}><span className={classes.iconsName}>Wishlist &nbsp; </span><BsFillHeartFill fontSize={"1em"} style={{marginTop:"3px"}}/></NavLink>
        <NavLink to="/cart " className={classes.icon_set} style={{textDecoration:"none",color :"white"}}><span className={classes.iconsName}>Cart &nbsp;</span><HiShoppingCart fontSize={"1.2em"} style={{marginTop:"7px"}}/></NavLink>

        <Link to={"/signup"} onClick={Toggle} style={{color:"white",textDecorationLine:"none"}}>{LoggedInUserData.isAuthrized?<Avatar
  sx={{ bgcolor: deepOrange[500] }}
  alt={LoggedInUserData.firstname}
  src="/broken-image.jpg"
  
/>
:"Sign Up"}</Link>
      </div>
    </div>
  )
}

export default Navbar