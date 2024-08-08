import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd';
export default function NavBar() {
  const[txt,setTxt]=useState('');
  const [msg,setMsg]=useState('');
  const history =useNavigate();
  const user=(localStorage.getItem('user'));
  useEffect(()=>{
    if(user===null){
      setTxt('Not Signed in')
      setMsg('LogIn/SignUp')
    }
    if(user!==null){
      setTxt(`Hello,${user}`)
      setMsg('Logout')
    }
  })
  
  const check =()=>{
    if(user!==null){
      history('/Bookings')
    }else{
      message.error('You are not signed in sign first') 
      setTimeout(()=>{ 
        history('/logsignin')
      },2000)
    }
  }
  const handel=()=>{
    if(user===null){
      history("/logsignin")
    }
    else{
      localStorage.clear();
      setTxt('Not signed in ')
      setMsg('LogIn/SignUp')
       history('/')
    }
  }
  
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark  " style={{ backgroundColor:'black' , opacity:'0.9' }}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light " ><h2>CoolCars</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light hover" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item nav-link hover text-light" onClick={check}>
         Booking
        </li>
        <li className="nav-item  ">
          <a className="nav-link text-light hover" href="#about">About Us</a>
        </li>
        <li className="nav-item  ">
          <a className="nav-link text-light hover" href="#contact">Contact Us</a>
        </li>
  
      </ul>
      <div  className='container' >
      <button type="button" class="btn btn-primary position-relative mx-3">
  {txt}
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
<button type="button" onClick={handel} class="btn btn-primary position-relative">
  {msg}
  
</button>
 </div>
    </div>
  </div>
 
</nav>
       
  )
}
