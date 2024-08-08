import React from 'react'
import img from './img30.jpg';
import img1 from './img28.jpg';
import img2 from './img36.jpg';
import img3 from './img34.jpg';


import Cars from './Cars';

export default function Body() {
  return (
    <>
    {/*
    <div style={{position:'relative'}}>
    <img src={img} alt="" className='img-fluid' />
         <div className='container-fluid '  style={{ textAlign:'center' ,position:'absolute', top:'5%', cursor:'pointer' , borderRadius: '1rem',padding: '1rem' ,backgroundColor:'black' , opacity:'0.6'  ,  color:'white'}}>
         <h1 > Best Place To Find Amazing Cars</h1>
         </div>
    </div>*/}

<div id="carouselExampleCaptions" class="carousel slide "  data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src={img} class="d-block w-100 " style={{objectFit:'cover',height:'100vh'}} alt="..."/>
      <div class="carousel-caption " style={{position:'absolute',top:'0'}} >
        <h2>Welcome to CoolCars !</h2>
        <h4>Best Place to find amazing cars for rent.</h4>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img1} class="d-block w-100 " style={{objectFit:'cover',height:'100vh'}} alt="..."/>
      <div class="carousel-caption " style={{position:'absolute',top:'0'}}>
        <h2>We are cheap and affordable!</h2>
        <h4>You can find various amazing cars here at cheaper prices.</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" style={{objectFit:'cover',height:'100vh'}} alt="..."/>
      <div class="carousel-caption " style={{position:'absolute',top:'0'}}>
        <h2>Book now and enjoy your rides!</h2>
        <h4>You can Book car online and take you booked vehicle from your nearest CoolCars Show Room.</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" style={{objectFit:'cover',height:'100vh'}} alt="..."/>
      <div class="carousel-caption " style={{position:'absolute',top:'0'}}>
        <h2>We are 24X7 available to provide you with the cars!</h2>
        <h4>Book Your first car now and start to explore the city in a new way.</h4>
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    <Cars/>
  </>
   
      
  )
}
