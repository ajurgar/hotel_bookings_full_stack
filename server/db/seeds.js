use bookings;
db.dropDatabase();

db.bookings.insertMany([
{
    name: "Willy",
    email: "willy@gmail.com",
    status: false

},
{
    name: "Bob",
    email: "bob@gmail.com",
    status: true

},
{
    name: "Alex",
    email: "alex@gmail.com",
    status: true

},
{
    name: "Michael",
    email: "michael@gmail.com",
    status: true

},
    ]
)