import React, { createContext, useState } from 'react'
import img from './img20.jpg'
import img1 from'./img13.jpg'
import img2 from './img22.jpg'
import img3 from './img11.jpg'
import img4 from './img7.jpg'
import img5 from './img8.jpg'
import img6 from './img9.jpg'
import img7 from './img10.jpg'
import img8 from './img5.jpg'
import {  useNavigate } from 'react-router-dom'
import './style.css'
import { message } from 'antd'
export default function Cars() {
  const user=localStorage.getItem('user')
  const history=useNavigate();
  const detail=(id)=>{
    if(user===null){
      message.error("You Have To sign in first to book a vehicle")
      setTimeout(()=>{
        history('/logsignin')
      },2000)
    
    }
    else{
   let val=document.querySelector(`#${id} .price`)
  let s= val.textContent;
  let str=''
  for(let i=0;i<s.length;i++){
    if(!isNaN(s.charAt(i)) && !isNaN(parseInt(s.charAt(i)))){
      str+=s.charAt(i)
    }
  }
  localStorage.setItem('price',str);
  
  let pic=document.querySelector(`#${id} .img`)
  localStorage.setItem('image',pic.src)
  let car =document.querySelector(`#${id} .car`)
  localStorage.setItem('car',car.textContent)
  setTimeout(()=>{
    history('/BookNow')
  },1200)
}
  }

  return (
    <div    className='d-flex flex-wrap my-3  container-fluid justify-content-center' style={{backgroundImage:`url(${img1})` , backgroundRepeat:"no-repeat",backgroundPosition:'center',  backgroundSize:'contain',backgroundSize:'cover' }} >
         <div className='container-fluid'  style={{  cursor:'pointer' , borderRadius: '1rem',padding: '1rem' ,backgroundColor:'grey' , opacity:'0.6' ,  color:'white'}}>
         <h1 >Our Best Cars</h1>
         </div>
    <div id='one' className="card hover2 " style={{width: "18rem" , margin :  '1rem' }}>
  <img src={img} className="card-img-top img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title car">Supeltra</h5>
    <p className="card-text">A fantastic two seater flying machine with 2000cc petrole engine comfortable and beautiful. </p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item ">Mileage-10Km/L</li>
    <li className="list-group-item">Top Speed-300Km/Hr </li>
    <li className="list-group-item price">Price-270Rs(per hour)</li>
  </ul>
  <div className="card-body">
  <button type="button" onClick={()=>detail('one')} className="btn btn-primary">Book Now</button>
  </div>
</div>
 <div  id='two' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img2} className="card-img-top img" alt="..."/>
 <div className="card-body">
   <h5 className="card-title car">Banashree</h5>
   <p className="card-text">Beautiful peice of art best for long romantic rides with the loved one's with 1800cc diesel engine.</p>
 </div>
 <ul className="list-group list-group-flush ">
 <li className="list-group-item ">Mileage-12Km/L</li>
    <li className="list-group-item">Top Speed-200Km/Hr </li>
    <li className="list-group-item price">Price-280Rs(per hour)</li>
 </ul>
 <div className="card-body">
 <button type="button" onClick={()=>detail('two')} class="btn btn-primary">Book Now</button>
 </div>
</div>
 <div   id='three' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img3} className="card-img-top img" alt="..."/>
 <div className="card-body">
   <h5 className="card-title car">CopWagen</h5>
   <p className="card-text">This comfortable sedan car will make you feel like home with comfortable seats and amazing driving experience with 1600cc petrole engine</p>
 </div>
 <ul className="list-group list-group-flush">
 <li className="list-group-item ">Mileage-20Km/L</li>
    <li className="list-group-item">Top Speed-150Km/Hr </li>
    <li className="list-group-item price">Price-255Rs(per hour)</li>
 </ul>
 <div  className="card-body">
 <button type="button" class="btn btn-primary " onClick={()=>detail('three')}>Book Now</button>
 </div>
</div>
<div   id='four' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img4} className="card-img-top img" alt="..."/>
 <div className="card-body">
   <h5 className="card-title car">Zentro</h5>
   <p className="card-text">Small sized but four seater comfortable vehicle with 1200c petrole engine will give you amazing experience to drive in the city</p>
 </div>
 <ul className="list-group list-group-flush">
 <li className="list-group-item ">Mileage-16Km/L</li>
    <li className="list-group-item">Top Speed-180Km/Hr </li>
    <li className="list-group-item price">Price-360Rs(per hour)</li>
 </ul>
 <div   className="card-body">
 <button type="button" onClick={()=>detail('four')} class="btn btn-primary">Book Now</button>
 </div>
</div>
<div  id='five' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img5} className="card-img-top img" alt="..."/>
 <div   className="card-body">
   <h5 className="card-title car">Inferno</h5>
   <p className="card-text">This tough machine is capable enough to climb mountains best for rough and uneven terrains with powerful 1900cc diesel engine.</p>
 </div>
 <ul className="list-group list-group-flush">
 <li className="list-group-item ">Mileage-11Km/L</li>
    <li className="list-group-item">Top Speed-190Km/Hr </li>
    <li className="list-group-item price">Price-290Rs(per hour)</li>
 </ul>
 <div className="card-body">
 <button type="button" class="btn btn-primary" onClick={()=>detail('five')}>Book Now</button>
 </div>
</div>
<div  id='six' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img6} className="card-img-top img" alt="..."/>
 <div className="card-body">
   <h5 className="card-title car">Nrg500</h5>
   <p className="card-text">An amazing masterpiece this two seater beast will make you feel on the top of the world with its fantastic 25000 cc diesel engine .</p>
 </div>
 <ul className="list-group list-group-flush">
 <li className="list-group-item ">Mileage-9Km/L</li>
    <li className="list-group-item">Top Speed-360Km/Hr </li>
    <li className="list-group-item price">Price-380Rs(per hour)</li>
 </ul>
 <div className="card-body">
 <button type="button" class="btn btn-primary" onClick={()=>detail('six')}>Book Now</button>
 </div>
</div>
<div  id='seven' className="card hover2" style={{width: "18rem" , margin : '1rem'}}>
 <img src={img7} className="card-img-top img" alt="..."/>
 <div className="card-body">
   <h5 className="card-title car">Furousa</h5>
   <p className="card-text">A luxurious vehicle is a choice of a wise man this 17000cc petrole engine machine will give you a royal feel. </p>
 </div>
 <ul className="list-group list-group-flush">
 <li className="list-group-item ">Mileage-17Km/L</li>
    <li className="list-group-item">Top Speed-180Km/Hr </li>
    <li className="list-group-item price">Price-285Rs(per hour)</li>
 </ul>
 <div className="card-body">
 <button type="button" class="btn btn-primary" onClick={()=>detail('seven')}>Book Now</button>
 </div>
</div>
<div  id='eight' className="card hover2" style={{width: "18rem" , margin : '1rem' }}>
  <img src={img8} className="card-img-top img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title car">Andrez</h5>
    <p className="card-text">Two seater beast will confuse you weather its flying or what with its fantastic 26000cc diesel engine you will be amazed </p>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item ">Mileage-8Km/L</li>
    <li className="list-group-item">Top Speed-390Km/Hr </li>
    <li className="list-group-item price">Price-335Rs(per hour)</li>
  </ul>
  <div className="card-body">
  <button type="button" class="btn btn-primary" onClick={()=>detail('eight')}>Book Now</button>
  </div>
</div>
  </div>
  )
}
