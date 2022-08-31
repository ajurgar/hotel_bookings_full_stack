import React from "react";
import Booking from "./Booking";

const HotelBookings = ({bookings, removeBooking, updateHotelBooking}) =>{

    const bookingsList = bookings.map((booking, index) =>{
        return <Booking booking={booking} key={index} removeBooking={removeBooking} updateHotelBooking={updateHotelBooking}/>
    });


    return(
        <>
            {bookingsList}
        </>
    );
};

export default HotelBookings;