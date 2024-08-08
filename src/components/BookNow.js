import React, { useEffect, useState } from 'react'
import img from './img16.jpg'
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
export default function BookNow() {
  const [address,setAddress]=useState('')
  const [no,setNo]=useState('');
  const[flag,setFlag]=useState(true);
  const[bit,setBit]=useState(true);
  const[flag2,setFlag2]=useState('');
  const[flag3,setFlag3]=useState('');
  const history=useNavigate()
  const process=(e)=>{
  e.preventDefault();
    if(address===''||flag||flag2===''||flag3===''||no===''){
      message.error('fill all the details first to proceed');
    }
    else{
      if(no.length!=10 ){
        message.error('enter a valid 10 digit number');
      }
      else{
  const fromDate=new Date(flag2);
  const toDate=new Date(flag3)
  const diff=toDate-fromDate;
  const hours=diff/(1000*60*60);
        if(hours<1){
          message.error('we cannot give a car on rent for less than one hour!\n you have to rent for atleast one hour')
        }
        else{
          message.success('details filled successfully!')
          localStorage.setItem('from',flag2)
          localStorage.setItem('to',flag3)
          setTimeout(()=>{
          history("/Billing");
          },2000)
        }
      }
    }
  }
  useEffect(()=>{
    let today=new Date().toISOString().slice(0, 16);
    document.querySelector('#from').setAttribute('min',today)
   // document.querySelector('#to').setAttribute('min',today)

  },[])
 
  return (
    <div className='container-fluid'   style={{ fontWeight:'bold',color:'white', alignItems:'center', backgroundImage:`url(${img})` , backgroundSize:'contain',height:'130vh', backgroundRepeat:"no-repeat",backgroundPosition:'center', backgroundSize:'cover'  }}  >
        <br />
        <div className='container-fluid ' style={{ fontWeight:'bold',  borderRadius:'2%', padding:'2%',height:'80%',width:'45%' }}  >
            <h4>Fill these Necessary Details To Book Your Vehicle..</h4>
            <br />
            <form class="row g-3 ">
  <div class="col-12">
    <label for="inputAddress" class="form-label">Your Address</label>
    <input type="text" onChange={e=>setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-5 my-5">
    <label for="inputCity" class="form-label">Phone no</label>
    <input type="number" onChange={e=>setNo(e.target.value)} class="form-control" id='phoneNo' maxLength='10'/>
  </div>
 
 
  <div class="col-md-5 my-5">
    <label for="inputState" class="form-label">City</label>
    <select onChange={e=>setFlag(false)}  id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option value="Adilabad">Adilabad</option> <option value="Agra">Agra</option> <option value="Ahmedabad">Ahmedabad</option> <option value="Ahmednagar">Ahmednagar</option> <option value="Aizawl">Aizawl</option> <option value="Ajitgarh(Mohali)">Ajitgarh (Mohali)</option> <option value="Ajmer">Ajmer</option> <option value="Akola">Akola</option> <option value="Alappuzha">Alappuzha</option> <option value="Aligarh">Aligarh</option> <option value="Alirajpur">Alirajpur</option><option value="BangaloreUrban">Bangalore Urban</option> <option value="Banka">Banka</option> <option value="Bankura">Bankura</option> <option value="Banswara">Banswara</option> <option value="Barabanki">Barabanki</option> <option value="Baramulla">Baramulla</option> <option value="Baran">Baran</option> <option value="Bardhaman">Bardhaman</option> <option value="Bareilly">Bareilly</option> <option value="Bargarh(Baragarh)">Bargarh (Baragarh)</option> <option value="Barmer">Barmer</option> <option value="Chittorgarh">Chittorgarh</option> <option value="Churachandpur">Churachandpur</option> <option value="Churu">Churu</option> <option value="Coimbatore">Coimbatore</option> <option value="CoochBehar">Cooch Behar</option> <option value="Cuddalore">Cuddalore</option> <option value="Cuttack">Cuttack</option> <option value="DadraandNagarHaveli"> Dadra and Nagar Haveli </option> <option value="Dahod">Dahod</option> <option value="DakshinDinajpur">Dakshin Dinajpur</option> <option value="DakshinaKannada">Dakshina Kannada</option> <option value="Daman">Daman</option> <option value="Damoh">Damoh</option> <option value="Dantewada">Dantewada</option> <option value="Darbhanga">Darbhanga</option><option value="Kollam">Kollam</option> <option value="Koppal">Koppal</option> <option value="Koraput">Koraput</option> <option value="Korba">Korba</option> <option value="Koriya">Koriya</option> <option value="Kota">Kota</option> <option value="Kottayam">Kottayam</option> <option value="Kozhikode">Kozhikode</option> <option value="Krishna">Krishna</option> <option value="Kulgam">Kulgam</option> <option value="Kullu">Kullu</option> <option value="Kupwara">Kupwara</option> <option value="Kurnool">Kurnool</option> <option value="Kurukshetra">Kurukshetra</option> <option value="KurungKumey">Kurung Kumey</option> <option value="Kushinagar">Kushinagar</option> <option value="Kutch">Kutch</option> <option value="LahaulandSpiti">Lahaul and Spiti</option>
    </select>
  </div>
  <h3>please select the dates and time slot you wish to book the vehicle</h3>
  <div class="col-md-5  my-2">
    <label for="inputZip" class="form-label">Renting From</label>
<input type="datetime-local" onChange={e=>setFlag2(e.target.value)}  class='form-control ' id='from' min="" name="session-date"/>
  </div>

  <div class="col-md-5  my-2">
    <label for="inputZip" class="form-label">To</label>
    {flag2===''? 
  <input onChange={e=>setFlag3(e.target.value)} type="datetime-local" class='form-control 'id='to' min="" name="session-date" disabled />
  :
  <input onChange={e=>setFlag3(e.target.value)} type="datetime-local" class='form-control 'id='to' min={flag2} name="session-date"   />
  }

  o </div>
  <div class="col-12 my-3">
    <button  type="submit" class="btn btn-primary" onClick={process}>Proceed</button>
  </div>
</form>
            </div>
</div>

  )
}
