import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { AuthContext } from "../../providers/AuthProvider";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    const handleDelete = id => {
        const proceed = confirm("Are You Sure you want to delete")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedBookings = bookings.map(booking =>
                        booking._id === id ? { ...booking, status: 'confirm' } : booking
                    );
                    setBookings(updatedBookings);

                }
            })

    }
    return (
        <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-6">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full rounded-lg shadow-lg">
                <table className="table w-full text-center">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Bookings;