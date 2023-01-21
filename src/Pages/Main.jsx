import React from 'react'
import classes from "./Main.module.css"
import image from "../Media/image1.jpg"
import ProductList from '../Components/ProductList'
import { Category } from '../Components/Category'
import Footer from '../Components/Footer'
import Slider from "../Components/Slider"
function Main() {
  const Data=["https://images.ethoswatches.com/img/uploads/banners/2022/09/ethoswatches_desktop02_09_2022_1724562354.jpg",
"https://images.ethoswatches.com/img/uploads/banners/2022/10/ethoswatches_desktop10_10_2022_1021213133.jpg",
"https://images.ethoswatches.com/img/uploads/banners/2023/01/ethoswatches_desktop18_01_2023_1555284672.jpg",
"https://cdn.helioswatchstore.com/production/media/desktop-1mb.gif",
]
  return (
    <div className={classes.container}>
        <div className={classes.Banner} >
          <Slider Category="image" data={Data}/>
        </div>
        <ProductList attribute={"New"} headingTitle="NEW PRODUCT LISTS" productType="new" />

        <Category/>
      <ProductList attribute={"Popular"} headingTitle="POPULAR PRODUCT LISTS" productType="popular" />
      <Footer/>

    
    </div>
  )
}

export default Main