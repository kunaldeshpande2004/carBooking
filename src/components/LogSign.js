import React, { useState } from 'react'
import './style.css'
import img from './img4.jpg';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function LogSign() {
  const[flag,setFlag]=useState(true);
  const history = useNavigate();
  function toggle (e){
  e.preventDefault();
    setFlag(!flag);
  }
  const[email,setEmail]=useState('')
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const signup=async(e)=>{
    e.preventDefault();
    if(email===''||name===''||password===''){
      message.error('Fill all the details first');
    }
    else{
   
    try{
      await axios.post('http://localhost:8000/logsignin',{
        name:name,
        password:password,
        email:email,
        action:'signup'
      })
      .then((res)=>{
        if(res.data==='exist'){
          message.error('username or email  already exist  try other name and email')
        }
        else if(res.data==='notexist'){
          message.success( 'SignUp successfull hello '+name)
          setTimeout(()=>{
            setFlag(!flag);
          },2000)
         
        }
      })
      .catch(e=>{
        message.error('Server error please try again later')
      })
    }
    catch(err){
      message.error('Some problem occured please try again later')
    }
    }
  }
  async function login(e){
    e.preventDefault();
    if(name===''||password===''){
      message.error('Fill all the details first');
    }
    else{
    try{
      await axios.post('http://localhost:8000/logsignin',{
        name:name,
        password:password,
        email:email,
        action:'login'
      }).then((res)=>{
        if(res.data==='exist'){
          message.success(" Login successfull Welcome Back! "+name)
          localStorage.setItem('user',name)
          setTimeout(()=>{
            history('/')
          },2000)
        }
        else if(res.data==='notexist'){
          message.error('wrong username or password')
        }
      })
      .catch(e=>{
        message.error('Server error please try again later')
      })
    }
    catch(err){
      message.error('some problem occured please try again later')
    }
    }
  }
  
  return (

    <div  style={{  alignItems:'center', backgroundImage:`url(${img})` , backgroundSize:'contain', backgroundRepeat:"no-repeat",backgroundPosition:'center', backgroundSize:'cover' ,height:'80vh'   }} className=' container-fluid d-flex flex-column '>
      <div className='container-fluid' >
   { flag ? 
  
    <form  style={{  fontWeight:'bold' ,color: 'black',display:'contents'}}>
             <div className="mb-3 my-5 container" >
    <label className="form-label"> create userName</label>
    <input type="text" onChange={e=>setName(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 my-3 container">
    <label  className="form-label">Your Email address</label>
    <input type="email" onChange={e=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 my-3 container">
    <label  className="form-label">Create Password</label>
    <input type="text"  onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
      <button type="button" onClick={signup} className="btn btn-primary">Create</button>
      <br />
      <p className="message">Already registered? <a style={{textDecoration:'none'}}  href="/login" onClick={toggle} >Login</a></p>
    </form> :
    <form  style={{ fontWeight:'bold', color: 'black', display:'contents'}}>
             <div className="mb-3 my-5 container">
    <label className="form-label"> Your Name</label>
    <input type="text" onChange={e=>setName(e.target.value)}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 my-3 container ">
    <label  className="form-label">Password</label>
    <input type="Password" value={password} onChange={e=>setPassword(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

      <button type="button" onClick={login} className="btn btn-primary">LogIn</button>
      <br />
      <p className="message">Not registered? <a style={{textDecoration:'none'}}  href="/signin" onClick={toggle} >Create an account</a></p>
    </form>
}
</div>
    </div>
  
  )
}
