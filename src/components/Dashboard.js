import React, { Fragment, useEffect, useState } from 'react'
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
  const [visibility,setVisibility] = useState(false);
  const [Username,setUsername] = useState();
  const [search,setsearch] = useState();
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
    let message = window.confirm("Are you sure want to delete");
    if(message)
    {
    const a = [data.filter((item)=>{ return item.token != token})];
    localStorage.setItem('info',JSON.stringify(a[0]));
    navigate('/dashboard');
  }
  }
(()=>{
   setTimeout(()=>{
    setVisibility(true)
   },3000)
})()

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

  function inputdata(e)
  {
    setsearch(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <Dashboardnavbar/>
     <div className='sidebar'>
      <br/><br/>
     <input type="text" onChange={inputdata} placeholder="Search email..."/>
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
  
      {visibility?data.filter((items) => {
          if (search == null) {
              return items;
          } else if (items.email.toLowerCase().includes(search.toLowerCase())) {
              return items;
          }}).map((i,index)=>{
        return(
          <tr key={index}>
          <td>{i.name}</td>
          <td>{i.email}</td>
          <td>{i.phone}</td>
          <td><Button variant="contained" color="error" onClick={()=>Delete(i.token)}>Delete</Button> &nbsp;&nbsp;
          <Button variant="contained" color="warning" onClick={()=>handleShow(i.token,i.password)}>Update</Button>
          </td>
        </tr>
        )
      }) : <Fragment>
   
   <Spinner animation="grow" variant="danger" className='c1'/>
   <Spinner animation="grow" variant="warning" className='c2'/>
   <Spinner animation="grow" variant="info" className='c3'/>
   <Spinner animation="grow" variant="light" className='c4'/>
  
      </Fragment>
      }
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
// {
//   <span className="nav-item searchnav ">
//   <input className="form-control" value={value} onChange={handleinput} id="navinput" placeholder="Search Your Products..." />
//   {
//       Allapi.filter((items) => {
//           if (value == "") {

//           } else if (items.title.toLowerCase().includes(value.toLowerCase())) {
//               return items
//           }
//       }).map((items) => {
//           return (
//               <>
//                   <div>
//                       <NavLink onClick={onsearch} id="searchid" to={`/product/${items.id}`}>
//                           <div className="d-flex searchbox">
//                               <img src={items.img} alt="searchimg" id="searchnavimg" className="mt-1 ml-4" />
//                               <p className="searchp mt-1" style={{ color: "black", fontSize: 10 }}>{items.title}.slice(0,5)</p>
//                           </div>
//                       </NavLink>
//                   </div>

//               </>
//           )
//       })
//   }
// </span>
// }