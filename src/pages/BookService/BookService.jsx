import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import BannerWall from "../../components/BannerWall";

import bannerImage from "../../assets/about.jpg"

const BookService = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service
    const { user } = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const date = form.date.value
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price
        }
        console.log(booking);
        fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Service Booked Successfully")
                }
            })




    }

    return (
        <>
            <BannerWall
                title="Book Service"
                subtitle="Home/Book Services"
                backgroundImage={bannerImage}
                className="mt-11"
            >

            </BannerWall>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-11 mb-11">

                <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Book Service: {title}</h2>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-600">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                name="name"
                                className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-600">Date</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-600">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="email"
                                className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-gray-600">Due amount</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={`${price}`}
                                className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="form-control mt-8">
                        <input
                            className="btn btn-primary btn-block bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                            type="submit"
                            value="Order Confirm"
                        />
                    </div>
                </form>
            </div>


        </>

    );
};

export default BookService;