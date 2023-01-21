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
import { createContext } from "react";
import DataBase from "./Firebase"
import { Password } from "@mui/icons-material";
export const User=createContext({});

function App() {

  const Navigate=useNavigate();
  const [Creadential, setCreadential] = useState({fname:"",lname:"",email:"",Gender:"",Password:""});
  const [LoggedInUserData, setLoggedInUserData] = useState({id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]});

    
    // Create user
    const auth = getAuth();
    //  Fetch Data
    const FetchData= async (email)=>{
      console.log(email,"email")
      const citiesRef = collection(DataBase, "User");
      const q = query(citiesRef, where("email", "==", `${email}`));
      console.log(q,"q");
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot,"querySnapshot")
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setLoggedInUserData({...LoggedInUserData,...doc.data(),isAuthrized:true,id:doc.id});
      });
    }
    // Creat user in DataBase
       const CreateUserInDataBase = async ()=>{
        const DocRef= await addDoc(collection(DataBase,"User"),{
        email:Creadential.email,
        firstName:Creadential.fname,
        lastName:Creadential.lname,
        Gender:Creadential.Gender,
      }); 
      Navigate("/login")
     }
    // Create User
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
          setCreadential({...Creadential,message:errorCode.split("/")[1]})
          
      }); 
    }
    // Login User
    const verifyCredential=async()=>{
      console.log("i am in verifyCredential")
       const res= await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
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
          setCreadential({...Creadential,message:errorCode.split("/")[1]})
    
        });
      
    }
console.log(LoggedInUserData)



  return (
    <User.Provider value={{Creadential,setCreadential,createUser,verifyCredential,LoggedInUserData,setLoggedInUserData}}>

      <Navbar/>
      <Router/>
      </User.Provider >
    
  );
}

export default App;
