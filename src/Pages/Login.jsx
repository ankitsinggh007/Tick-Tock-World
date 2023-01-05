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
import Context from '../ContextAPI';
import { Link } from 'react-router-dom';
function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {Registration,setRegistration,verifyCredential}=useContext(Context);
    const [Message, setMessage] = useState("")


    const handleSubmit = (event) => {
    event.preventDefault();
    verifyCredential()
  }

  return (
    
    <form onSubmit={handleSubmit} className={classes.form}>
          <span className={classes.Logo} ><img className={classes.img} src={tbc} height="60px" width="60px"/></span>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          onChange={(e)=>{setRegistration({...Registration,Email:e.target.value})}}
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
           onChange={(e)=>{setRegistration({...Registration,Password:e.target.value})}}
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
      <div >
          <Button type='submit' variant="contained" style={{backgroundColor:"#161619",marginLeft:"37%",padding:"5px",fontSize:"1.2rem"}}>Log In</Button>
        
          </div>
          <Link to="/signup" style={{marginTop:"20px"}}>New to the site? Register</Link>
    </form>
  );
}

export default Login;
