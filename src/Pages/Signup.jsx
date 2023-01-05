import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import classes from "./Signup.module.css"
import { Button } from '@mui/material';
import watchLogo from "../Media/watchLogo.png"
import { Alert } from 'reactstrap';
import { Select, MenuItem, InputLabel } from "@mui/material"
import { Link } from 'react-router-dom';
import Context from '../ContextAPI';
function Signup() {
    const [Message, setMessage] = useState("")
    const [rePassword, setrePassword] = useState("")
    const { Registration,setRegistration,createUser}=useContext(Context);
    console.log( { Registration,setRegistration},"obj")
    const verifyData = (e) => {
        
        e.preventDefault();
        if(Registration.Password===Registration.Re_Password){
            createUser(Registration.Email,Registration.Password)
        }
        else{
            console.log("not matched")
        }
    }

    return (
        <form className={classes.Register} onSubmit={verifyData}>
            <div  ><img className={classes.Logo_register} src={watchLogo} height="60px" width="60px" />
            </div>
            <div className='name'>
                <TextField id="outlined-search" label="First Name"   
                required
                type="text"
                onChange={(e)=>{setRegistration({...Registration,Firstname:e.target.value})}}
                />
                <TextField id="outlined-search"
                required
                label="Last Name" type="text"
                onChange={(e)=>{setRegistration({...Registration,Lastname:e.target.value})}}
                
                />
            </div>
            <div>
                <TextField
                    select
                    required
                    label="Gender"
                    defaultValue=""
                    style={{ width: "230px" }}
                    onChange={(e)=>{setRegistration({...Registration,Gender:e.target.value})}}
                    
                    >
                    <MenuItem value={"Male"}>
                        Male
                    </MenuItem>
                    <MenuItem value={"Female"}>
                        Female
                    </MenuItem>

                </TextField>

                <TextField id="outlined-search"
                 label="Email" type="email"
                 required
                 onChange={(e)=>{setRegistration({...Registration,Email:e.target.value})}}

                />
            </div>
            <div className={classes.credential}>
                <TextField id="outlined-search" label="Password" type="password"
                onChange={(e)=>{setRegistration({...Registration,Password:e.target.value})}}
                
                required
                />
                <TextField id="outlined-search" label="Re-enterd Password" 
                required
                type="password"
                onChange={(e)=>{setRegistration({...Registration,Re_Password:e.target.value})}}

                />
            </div>
            <div>
                <Button variant="contained" type="submit" style={{ backgroundColor: "#414141", padding: "12px", fontSize: "1.2rem" }}>Register</Button>
            </div>
            <div >
                <Link to={"/login"} >Already An User? Sign in</Link>
            </div>

        </form>
    )
}

export default Signup