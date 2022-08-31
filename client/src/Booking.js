import React from "react";
import { deleteBookings } from "./BookingService";

const Booking = ({ booking, removeBooking, updateHotelBooking }) => {

    const handleDelete = () => {
        deleteBookings(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    const handleCheckin = () => {
        const updateBooking = {
            name: booking.name,
            email: booking.email,
            status: !booking.status
        }
        updateHotelBooking(updateBooking, booking._id)
    }


    return (
        <>
            <p><b>Name: </b>{booking.name}</p>
            <p><b>Email: </b>{booking.email}</p>
            <p><b>Booking Status: </b>{booking.status ? "Checked In" : "Checked Out"}</p>
            <button onClick={handleCheckin}>  {booking.status ? 'Check Out' : 'Check In'}</button>
            <button onClick={handleDelete}> 🗑 </button>

            <hr></hr>


        </>
    )
}



export default Booking;