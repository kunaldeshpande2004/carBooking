import React from 'react'
import img from './img21.jpg'
import './style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
export default function Billing() {
  const name =localStorage.getItem('user')
  const image=localStorage.getItem('image');
  const price=parseInt(localStorage.getItem('price'));
  const from=localStorage.getItem('from');
  const to=localStorage.getItem('to');
  const fromDate=new Date(from);
  const toDate=new Date(to)
  const diff=toDate-fromDate;
  let hours=diff/(1000*60*60);
  hours=parseInt(hours)
const car = localStorage.getItem('car')
localStorage.setItem('totalAmount',price*hours)
const amount = price*hours
const history =useNavigate();
const confirm = async()=>{
  try{
    await axios.post('https://carbooking-backend-51nf.onrender.com/confirm',{
      name :name,
      car:car,
     fromDate: fromDate,
     toDate:toDate,
     hours:hours,
     amount:amount
    }).then((res)=>{
      message.success("Booking confirmed " +res.data)
      setTimeout(()=>{
        history('/Confirm')
      },2000)
    })
    .catch((err)=>{
      message.error('unable to book a car try again '+err)
      })
   }
   catch(err){
    alert(err)
   }
}
  return (
    <div className='container-fluid justify-content-center' style={{ color:'white',fontWeight:"bold",alignContent:'center',backgroundImage:`url(${img})`,height:'110vh',backgroundSize:'contain',backgroundRepeat:'no-repeat',  backgroundSize:'cover',backgroundPosition:'center',marginBottom:'2%' }}>
      <br />
    <div className='container-fluid d-flex justify-content-center box' style={{ width:'100%', height:'80%', alignItems:'center' }}>
      <div className='container-fluid'style={{width:'70%'}} >
        <br />
        <br />
        <br />
        <br />
        <img className='img-fluid' src={image} style={{  borderRadius:'5%'}} />
        <h4>{car}</h4>
      </div>
      <div className='container-fluid' style={{width:'90vw'}} >
      <h3>Total Amount</h3>
      <table class="table" style={{ height:'60vh',color:'white',fontWeight:'bold'}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> From time</th>
      <th scope="col">To time</th>
      <th scope="col">Total </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Renting hours</th>
      <td>{from}</td>
      <td>{to}</td>
      <td>{hours} Hours</td>
    </tr>
    
    <tr>
      <th scope="row">Rent</th>
      <td colspan='2'>{price}RS  per hour</td>
      <td colspan="2">{price} x {hours}</td>
    </tr>
    <tr>
      <th scope="row">Total amount</th>
      <td  colspan="2">{price*hours} RS</td>
      <td>for {hours} hours</td>
    </tr>
  </tbody>
</table>
<button type="submit"  onClick={()=>history('/BookNow')} className="btn btn-primary mx-5">Change the booking dates</button>
<button type="submit"  onClick={confirm}  className="btn btn-primary my-3 mx-5">Confirm booking</button>
      </div>
    </div>
    </div>
  )
}
