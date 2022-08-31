import React, { useState, useEffect } from 'react';
import { postBooking } from "./BookingService";
import './form.css'

const BookingsForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: false
    })


    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
            .then((data) => {
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
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} required>
                </input>
            </div>

            <div className="formWrap">
                <label htmlFor="email"> Email: </label>
                <input
                    onChange={onChange}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} required>
                </input>
            </div>

            <div>
                <label
                    htmlFor='status'>Checked in</label>
                <input
                    onChange={onChange}
                    type="checkbox"
                    id="status"
                    name="status"
                    value={formData.status}/>
            </div>

            <input type="submit" value="Save" id="save" />


        </form>

    )

}



export default BookingsForm;
