import React,{useContext} from 'react'
import classes from "./Wishlist.module.css"
import { User } from '../App'


function Wishlist() {
  const {LoggedInUserData,setLoggedInUserData} = useContext(User)


  return (
    <div className={classes.Wishlist}>
        <h1 style={{textDecoration:"underline"}}>Wishlist</h1>
        <div className={classes.containers}>
            {
                LoggedInUserData?.Liked?.map((obj,index)=>{
                    return(
                        <div className={classes.items}>
                            <img src={obj.image} width="150px"/>
                            <h2>{obj.title}</h2>
                            <h2 style={{color:"grey"}}>{obj.brand}</h2>
                            <h3>₹ {obj.price}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Wishlist