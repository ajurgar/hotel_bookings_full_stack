import './App.css';
import React, { useState, useEffect } from 'react';
import HotelBookings from './HotelBookings';
import BookingsForm from './BookingsForm';
import { updateBooking, getBookings } from './BookingService';


function App() {

  const [bookings, setBookings] = useState([])

  useEffect(()=>{
   getHotelBookings()
  }, []);

  const updateHotelBooking = (booking, booking_id) =>{
    updateBooking(booking, booking_id)
    .then(()=>{
      getHotelBookings()
    })
    
  }

  const getHotelBookings = () =>{
    getBookings().then((allBookings)=>{
      setBookings(allBookings);
    })
  }

  const addBooking = (booking) => {
    const arrayOfBooking = bookings.map(booking => booking);
    arrayOfBooking.push(booking);
    setBookings(arrayOfBooking);
  }
 

  const removeBooking = (id) =>{
    const arrayOfBooking = bookings.map(booking => booking);
    const indexToDelete =  arrayOfBooking.map(booking => booking._id).indexOf(id);
    console.log(indexToDelete)

    arrayOfBooking.splice(indexToDelete, 1);
    setBookings(arrayOfBooking);
  }





  return (
    <div className="App">

    <BookingsForm addBooking={addBooking}/>
    <HotelBookings bookings ={bookings} removeBooking={removeBooking} updateHotelBooking={updateHotelBooking}/>



    </div>
  );
}

export default App;
