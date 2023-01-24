import React, { useState,useContext } from 'react';
import { User } from '../App';
import { Alert } from 'reactstrap';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import tbc from "../Media/watchLogo.png"
import { Button } from '@mui/material';
import classes from "./Login.module.css"
function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {Creadential, setCreadential,createUser,verifyCredential}=useContext(User);
    const [Message, setMessage] = useState("")


    const handleSubmit = (event) => {
    event.preventDefault();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

     if(Creadential.email!==""){
      if(regex.test(Creadential.email)){
        if(Creadential.Password!==""){
          verifyCredential(); 
        }
        else{
          setMessage("fill password");
        }
      }else{
        setMessage("fill valid email");
      }

     }
     else{
      setMessage("fill email");
     }    
  };

  return (
    <div className={classes.body}>
    
    <form onSubmit={handleSubmit} className={classes.form}>
          <span className={classes.Logo} ><img className={classes.img} src={tbc} height="60px" width="60px"/></span>
          {Message.length != 0 && <Alert color="danger">
                        {Message}
                    </Alert>}
        <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
        className={classes.input}
        required
          onChange={(e)=>{setCreadential({...Creadential,email:e.target.value})}}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
        className={classes.input}

           onChange={(e)=>{setCreadential({...Creadential,Password:e.target.value})}}
            id="standard-adornment-password"
            
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          
        </FormControl>
      <br />
      <div className={classes.buttonbox} >
          <Button type='submit' style={{backgroundColor:"black",marginLeft:"20px"}} variant="contained">Log In</Button>
        
          </div>
    </form>
    </div>
  );
}

export default Login;
