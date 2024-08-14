import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from './img37.jpg'
export default function Booking() {
  const [booking,setBooking]=useState([]);
  const [flag,setFlag]=useState(1);
  const history = useNavigate();
    const name = localStorage.getItem('user')
    if(name===null){
      message.error("you have to signin first ")
        history('/logsignin')
    }
    useEffect(()=>{
        try{
         axios.get('https://carbooking-backend-51nf.onrender.com/Bookings',{params:{
            name:name }
        }).then((res)=>{
          console.log(res.data)
          setBooking(res.data[0].bookings)
        })
        .catch((err)=>{
          alert('Some error occured please try later ')
        })

        } 
        catch(err){
            message.error('server side error try again later')
        }
        
    },[])
  return (
    <div>
                    <div className='container-fluidjustify-content-center ' style={{ color:'white',fontWeight:"bold",backgroundImage:`url(${img})`,height:'110vh',backgroundSize:'contain',backgroundRepeat:'no-repeat',  backgroundSize:'cover',backgroundPosition:'center',marginBottom:'2%' }} key={booking._id} >
                      <br />

                      <h2>Your Bookings
                        <br />
                        <br />


                      </h2>
                      <div className='container-fluid table-responsive' >
                        <table className="table table-bordered" style={{color:'white',fontWeight:'bold'}}>
                    <thead>
                        <tr>
                            <th>bookings</th>
                            <th scope="col">Car</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Total Hours</th>
                            <th scope="col"> Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                      {booking.length===0?<tr><td colSpan={'6'}><h1>No Bookings Done Yet</h1></td></tr>:
                        booking.map((booking) => (
                            <tr key={booking._id}>
                               <td>#</td>
                                <td>{booking.car}</td>
                                <td>{new Date(booking.fromDate).toLocaleDateString()}</td>
                                <td>{new Date(booking.toDate).toLocaleDateString()}</td>
                                <td>{booking.hours}</td>
                                <td> {booking.amount} Rs</td>
                            </tr>
                     ))}
                    </tbody>
                </table>
                </div>
                    </div>
    </div>
  )
}
