import React from "react";
import Booking from "./Booking";

const HotelBookings = ({bookings, removeBooking}) =>{

    const bookingsList = bookings.map((booking, index) =>{
        return <Booking booking={booking} key={index} removeBooking={removeBooking}/>
    });

    return(
        <>
            {bookingsList}
        </>
    );
};

export default HotelBookings;