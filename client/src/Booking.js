import React from "react";
import { deleteBookings } from "./BookingService";

const Booking = ({booking, removeBooking}) =>{

    const handleDelete = () => {
        deleteBookings(booking._id).then(() =>{
            removeBooking(booking._id)
        })
    }

    return(
        <>
        <p><b>Name: </b>{booking.name}</p>
       
        <p><b>Email: </b>{booking.email}</p>
        <p><b>Booking Status: </b>{booking.status}</p>
        <button onClick={handleDelete}> 🗑 </button>

        <hr></hr>
            
        
        </>
    )
}



export default Booking;