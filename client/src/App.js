import './App.css';
import React, { useState, useEffect } from 'react';
import { getBookings } from './BookingService';
import HotelBookings from './HotelBookings';

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setBookings(allBookings);
    })
  }, []);
 

  const removeBooking = (id) =>{
    const arrayOfBooking = bookings.map(booking => booking);
    const indexToDelete =  arrayOfBooking.map(booking => booking._id).indexOf(id);
    console.log(indexToDelete)

    arrayOfBooking.splice(indexToDelete, 1);
    setBookings(arrayOfBooking);
  }



  return (
    <div className="App">

    <HotelBookings bookings ={bookings} removeBooking={removeBooking}/>



    </div>
  );
}

export default App;
