import React, { useEffect, useState } from 'react'
import Dashboardnavbar from '../header/Dashboardnavbar';
import './dashboard.css'
import Table from 'react-bootstrap/Table';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Modal,Form,Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const Oldkey = sessionStorage.getItem('store');
  console.log(222,Oldkey);
  const key = useSelector((state) => state.Reducer.key);
  const navigate = useNavigate();
  const data  = JSON.parse(localStorage.getItem("info"))
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(false);
  const [password, setPassword] = useState(false);
  const [Email,setEmail] = useState();
  const [Num,setNum] = useState();
  const [Username,setUsername] = useState();
  const handleShow = (token,password) =>{
    setToken(token);
    setPassword(password);
    setShow(true) }//
  const handleClose = (e) =>{
    e.preventDefault()
    setShow(false);
    const b = {};
    b.name = Username;
    b.email = Email;
    b.password = password;
    b.phone = Num;
    b.token = token;
    const c = [data.map((item)=>{ 
    if(item.token == token)
    {
    return b;
    }
    else
    {
    return item;
    }
    })];
    localStorage.setItem('info',JSON.stringify(c[0]));
    navigate('/dashboard');
  };
  // console.log(data.token)
  function Delete(token)
  {
    // console.log(token);
    const a = [data.filter((item)=>{ return item.token != token})];
    localStorage.setItem('info',JSON.stringify(a[0]));
    navigate('/dashboard');
  }

  useEffect(()=>{
    if(Oldkey != key)
{
  navigate('/')
}
  },[])

  function getEmail(e)
  {
     setEmail(e.target.value);
     console.log(111,e.target.value);
  }

  function getNumber(e)
  {
  setNum(e.target.value);
  console.log(222,e.target.value);
  }
  function getUser(e)
  {
  setUsername(e.target.value);
  console.log(333,e.target.value);
  }
  return (
    <div>
      <Dashboardnavbar/>
     <div className='sidebar'>
      <br/><br/>
      <h1>Side Bar</h1>
      <span><hr style={{color:'black',height:'2px'}}/></span>
      <h3>User name 1</h3>
      <h3>User name 2</h3>
     </div>
     <div className='body'>
      <h1>Dashboard</h1>
     <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone_no</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  
      {data.map((item,index)=>{
        return(
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><Button variant="contained" color="error" onClick={()=>Delete(item.token)}>Delete</Button> &nbsp;&nbsp;
          <Button variant="contained" color="warning" onClick={()=>handleShow(item.token,item.password)}>Update</Button>
          </td>
        </tr>
        )
      })}
     </tbody>
    </Table>
     </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Update</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Updated Email"
                autoFocus
                onChange={getEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Phone Number"
                autoFocus
                onChange={getNumber}
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Username"
                autoFocus
                onChange={getUser}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
