import products from "../products"
// import { Link } from "react-router-dom";
import classes from "./Category.module.css";
import men from "../Media/men.png"
import women from "../Media/women.png"
export const Category = () => {
//   const { ProductState } = useProduct();
  return (
    <>
      <div className={classes.head}>
          <span className={classes.sectionHeading}>SHOP BY CATEGORY</span>
      </div>
      <div className={classes.Container}>
      <img  classname={classes.cat} src={women} alt="Women"/>
        <img classname={classes.cat} src={men} alt="Men"/>
      </div>
    </>
  );
};
