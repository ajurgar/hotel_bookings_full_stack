import React, { useState, useEffect } from 'react';
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: false,
    })


const onChange = (event) => {
    const newFormData = Object.assign({}, formData);
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
}

const onSubmit = (event) =>{
    event.preventDefault();
    postBooking(formData)
    .then((data) =>{
        addBooking(data);
    })

    setFormData({
        name: "",
        email: "",
        status: false,
    })
}

return (
<form onSubmit={onSubmit} id="bookings-form">
<h2>Add a Booking</h2>

<div className="formWrap">
<label htmlFor="name"> Name: </label>
<input
onChange ={onChange}
type="text"
id="name"
name="name"
value={formData.name}>
</input>
</div>

<div className="formWrap">
<label htmlFor="email"> Email: </label>
<input
onChange={onChange}
type="email"
id="email"
name="email"
value={formData.email}
>
</input>
</div>

<div>
<label
onChange={onChange}
type="boolean"
id="status"
name="status"
value={formData.status}> </label>
</div>

<input type="submit" value="Save" id="save"/>


</form>

)

}



export default BookingsForm;
