import React from 'react';
import Homenavbar from '../header/Homenavbar';
import './Home.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const path = useNavigate();
  return (
    <div className='Home'>
    <Homenavbar />
     <h1 style={{color:'red',fontFamily: 'Dancing Script',marginTop:"90px",fontSize:'50px'}}>Welcome To My Website</h1><br/>
     <Button variant="contained" onClick={()=> path('/login')} >Login</Button>&nbsp;&nbsp;&nbsp;
     <Button variant="contained" color="success" onClick={()=>path('/register')}>Register</Button>
    </div>
  )
}
