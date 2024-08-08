import React, { useState } from 'react'
import img from './img25.jpg'
import axios from 'axios';
import { message } from 'antd';

export default function Footer() {
  const [text,setText]=useState('');
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [msg,setMsg]=useState('')
  const handelSend=async(e)=>{
    e.preventDefault();
    if(localStorage.getItem('user')===null){
      message.error('you need to login first to send an mail to us')
    }
    else{
    
    if(text==='' || email===''||name===''){
      message.error('fill all the details first')
    }else{
      try{
        const response= await axios.post('http://localhost:8000/sendEmail',{
          name:name,
          email:email,
          text:text
         })
         message.success(`${response.data}`)
         setEmail('');
         setName('');
         setText('');
      }
      catch(e){
       message.error(` failed to Send Email Check your mailId !!`)
      }
    }
    }
  }
  return (
    <div className='  fluid bg-dark '  style={{  fontWeight:'bold',color:'white', alignItems:'center', backgroundImage:`url(${img})` , backgroundRepeat:"no-repeat",backgroundPosition:'center',  backgroundSize:'contain',backgroundSize:'cover' }} >
        <div className='container' id='contact'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3>For Even More Details You Can Directly Contact Us On Email</h3>
            <br />
            <h2>Contact Us</h2>
        <form>
        <div class="mb-3">
          <div className='container' style={{height:'10vh',width:'100%'}} ></div>
    <label class="form-label"> Your Name</label>
    <input type="text" value={name} onChange={e=>{setName(e.target.value)  }}  class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Your Email address</label>
    <input type="email" value={email} onChange={e=>{setEmail(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Write message here</label>
    <textarea value={text} onChange={e=>{setText(e.target.value)  }} class="form-control"></textarea>
  </div>
  <button type="submit" onClick={handelSend} class="btn btn-primary">Send</button>
 
</form>
<br />
</div>  
<div id='about'>
        <h2 >About Us</h2>
        <br />
        <ul style={{listStyleType:'none'}}>
            <li>we provide cheap and good cars at low prices</li>
            <li>just by paying the amount for the number of days you can enjoy your ride</li> 
        <br />
         <h2>Please Note</h2>
            <br />
            <li>Only person above age of 18 can rent our cars only after submiting us valid id proofs and details</li>
            <li>if any damage is caused or any acciendent occcurs due to the person rented car she/he has to play for all the damages that had happend to the car as per the policy of uor rental company</li>   
        </ul>   
        <h4>---2022-2024 All Rights Reserved---</h4> 
        </div>  
    </div>
  )
}
