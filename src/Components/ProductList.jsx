import classes from "./ProductList.module.css";
// import { Link } from "react-router-dom";
import products from "../products";
import { useNavigate } from "react-router-dom";

const Productlist = ({ headingTitle, productType,attribute }) => {
  
  const Navigate=useNavigate();
  const popularProducts =
  
    productType === "new" ? products.slice(0, 4) : products.slice(8, 12);
    console.log(popularProducts,"popularProducts")
  return (
    <>
      <div className={classes.headingTitle} >
          <span>{headingTitle}</span>
      </div>

      <div className={classes.productConatiner}>
        {popularProducts.map(({ image, title }, i) => {
          return (
            <div className={classes.item} key={i} onClick={()=>{Navigate("/ProductAll")}}>
                    <img
                      src={image}
                      className={classes.cardImage}
                      alt="Card-Image"
                      width="65%"
                      height="100%"
                    />
                    <h2 className={classes.text}>{title}</h2>
                <div className={classes.label}>{attribute}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productlist;
