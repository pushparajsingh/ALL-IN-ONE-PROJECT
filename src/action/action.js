
import React from 'react'
// import { notify } from '../components/login';
import { GET_REGISTER_REQUESTED,GET_LOGIN_REQUESTED } from '../constants';

export const Register = (data) => {
  // console.log("register page invoked");
  return ({
    type:GET_REGISTER_REQUESTED,
    payload:data
  })
}

export const LoginId = (data) => {
  // console.log(666,data);
  return ({
    type:GET_LOGIN_REQUESTED,
    payload:data
  })
}