import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Context from "./ContextAPI";
import { getDocs } from 'firebase/firestore';
import { query, where,getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";  
import { useContext, useState } from "react";
import products from "./products";
import Navbar from "./Components/Navbar"
import Main from "./Pages/Main";
import Router from "./routes/Router";
import { useNavigate } from "react-router-dom";

import DataBase from "./Firebase"
import { Password } from "@mui/icons-material";
function App() {
    const [AllProduct, setAllProduct] = useState(products)

    const Navigate=useNavigate();

    const [Registration, setRegistration] = useState({
      Firstname:"",
      Lastname:"",
      Gender:"",
      Email:"",
      Password:"",
      Re_Password:"",

    });
    const [UserData, setUserData] = useState({
      Firstname:"",
      Email:"",
      Wishlist:[],
      Cart:[]
    })
    const [isAuthorized, setisAuthorized] = useState(false)
    // Create user
    
 const auth = getAuth();
 //  Fetch Data
 const FetchData= async (email)=>{
  console.log("hi iam in fetchData")
   console.log(email,"email")
   const citiesRef = collection(DataBase, "User");
   const q = query(citiesRef, where("Email", "==", `${email}`));
   console.log(q,"q");
   const querySnapshot = await getDocs(q);
   console.log(querySnapshot,"querySnapshot")
   querySnapshot.forEach((doc) => {
     console.log(doc.id, " => ", doc.data());
     setUserData({...UserData,...doc.data(),id:doc.id});
     setisAuthorized(true);

   });

 }
 // Creat user in DataBase
    const CreateUserInDataBase = async ()=>{
      console.log(Registration,"Registration")
     const DocRef= await addDoc(collection(DataBase,"User"),{
     Email:Registration.Email,
     Firstname:Registration.Firstname,
     Lastname:Registration.Lastname,
     Gender:Registration.Gender,
   }); 
   Navigate("/login")
  }
    const createUser=async (email,password)=>{
      createUserWithEmailAndPassword(auth,email,password)
     .then((userCredential) => {
       const user = userCredential.user;
       console.log(user,"user");
       CreateUserInDataBase();
 
 
   })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode,errorMessage,"error");
      //  setCreadential({...Creadential,message:errorCode.split("/")[1]})
       
   }); 
 }
// Login User
const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, Registration.Email, Registration.Password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email,"user");
      FetchData(user.email);
      
      Navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"err");
      // setCreadential({...Creadential,message:errorCode.split("/")[1]})

    });
  
}




console.log(UserData,"User Data");
console.log(Registration);
console.log(isAuthorized,"isAuthorized")

  return (
    <Context.Provider value={{Registration,setRegistration,UserData, setUserData,AllProduct,createUser,verifyCredential,isAuthorized,setisAuthorized}} >
      <Navbar/>
      <Router/>
      </Context.Provider >
    
  );
}

export default App;
