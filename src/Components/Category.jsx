import products from "../products"
// import { Link } from "react-router-dom";
import classes from "./Category.module.css";
import men from "../Media/men.png"
import women from "../Media/women.png"
import { useNavigate } from "react-router-dom";
export const Category = () => {
//   const { ProductState } = useProduct();
const navigate=useNavigate();
  return (
    <div className={classes.box}>
      <div className={classes.head}>
          <span className={classes.sectionHeading}>SHOP BY CATEGORY</span>
      </div>
      <div className={classes.Container}>
      <img  classname={classes.cat} onClick={()=>navigate("/Women")} width="400px"  src={women} alt="Women"/>
        <img classname={classes.cat} onClick={()=>navigate("/Man")} width="400px"  src={men} alt="Men"/>
      </div>
    </div>
  );
};
