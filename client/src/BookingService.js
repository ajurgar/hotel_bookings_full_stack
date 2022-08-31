const baseURL = 'http://localhost:9000/api/bookings/'

const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

const postBooking = (booking) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

const updateBooking =  (booking, id) =>{
    return fetch(baseURL + id, {
        method: "PUT",
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
    })
}
const deleteBookings = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export {getBookings, postBooking, updateBooking, deleteBookings}