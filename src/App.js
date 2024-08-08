
import './App.css';
import Body from './components/Body';
import LogSign from './components/LogSign';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookNow from './components/BookNow';
import Billing from './components/Billing';
import Booking from './components/Booking';
import Confirm from './components/Confirm';


function App() {
  return (
    <div className='App'>
     
       <Router>
       <NavBar/>
        <Routes>
        <Route exact path='/' element={ <Body/>} />
        <Route exact path='/logsignin' element={<LogSign/>} />
        <Route exact path='/BookNow' element={<BookNow/>}/>
        <Route exact path='/Billing' element={<Billing/>}/>
        <Route exact path='/Bookings' element={<Booking/>}/>
        <Route exact path='/Confirm' element={<Confirm/>}/>
        </Routes>
        <Footer/>
       </Router>
    
    </div>
  );
}
export default App;
