import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Loginnavbar from '../header/Loginnavbar';
import { Button } from '@mui/material';
import { LoginId } from '../action/action';
import { ToastContainer, toast } from 'react-toastify';
import './login.css'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const notify = (a) => toast(a);
   const info = JSON.parse(localStorage.getItem('info'));
// console.log(info);
    const onSubmit = (data) =>{ 
    const a = info.map((item)=> data.email == item.email );
    const b = info.map((item)=> data.password == item.password)
   
    if(a[0] == b[0])
    {
      notify("successfully your login")
      setTimeout(()=>{
        // console.log(Math.ceil((Math.random() * 100000) + 10))
        let key = Math.ceil((Math.random() * 100000) + 10)
        sessionStorage.setItem('store',key); 
        navigate('/dashboard');
        dispatch(LoginId(key))
      },5000);
    }
    else{
      notify("please correct your email and password")
    }
   };
  return (
    <div className='background'>
      <Loginnavbar/>
      <div style={{border:'2px solid black',width:'38%',borderRadius:'25px',margin:'30px auto 30px auto',padding:'20px',backgroundColor:'rgba(204, 255, 255,0.2)'}} className="resize">
          <form onSubmit={handleSubmit(onSubmit)}  >
            <fieldset  ><legend><h1 style={{color:'white'}}>Login Form</h1></legend>

      <input  {...register("email",{ required: true ,pattern:/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} placeholder="Enter Email"/><br/><br/>
      {errors.email && <span style={{color:'red'}}>This field is required</span>}<br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} placeholder="Enter Password"/><br/><br/>
      {/* errors will return when field validation fails  */}
      {errors.password && <span style={{color:'red'}}>This field is required</span>}<br/>
      <Button variant="contained" color='success' type="submit">
        Submit
      </Button>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
      </fieldset>
    </form>
    </div>
    </div>
  )
}
