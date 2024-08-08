import React, { useEffect } from 'react'
import img from './img26.jpg'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
export default function Confirm() {
    const history = useNavigate();
    const from=localStorage.getItem('from');
    const to=localStorage.getItem('to');
    const fromDate=new Date(from);
    const toDate=new Date(to)
    const diff=toDate-fromDate;
    let hours=diff/(1000*60*60);
    hours=parseInt(hours)
  const car = localStorage.getItem('car')
  const amount=localStorage.getItem('totalAmount')
  return (
    <div className='container-fluid justify-content-center' style={{ color:'white',fontWeight:"bold",backgroundImage:`url(${img})`,height:'90vh',backgroundSize:'contain',backgroundRepeat:'no-repeat',  backgroundSize:'cover',backgroundPosition:'center',marginBottom:'2%',alignContent:'center'}}>
      <div className='container-fluid justify-content-center ' >
        <h2 >Your Booking Has been done for Car - {car}</h2>
        <h3>From {from} to {to} for {hours} hours </h3>
        <h3>total amount you have to pay will be {amount} RS</h3>
        <h3>you can take your car from the nearest CoolCars showroom after submitting all the valid proofs and documents</h3>
        <h3>You can see all yours bookings from the booking section on the navbar and even can cancel your booking from there </h3>
        <h4>Thanks for Choosing us</h4>
        <button type="submit"  onClick={()=>history('/')} className="btn btn-primary mx-5">go to home</button>
      </div>
    </div>
  )
}
