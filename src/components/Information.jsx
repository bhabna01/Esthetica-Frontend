import { useEffect } from "react";
import { FaAddressBook, FaBusinessTime, FaPhoneAlt } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Information = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div data-aos="fade-up">
            <div className="flex h-64 bg-gradient-to-r from-gray-900 to-gray-800 text-white justify-around items-center mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-lg shadow-lg mt-11">
                <div className="flex items-center space-x-4 mx-auto">
                    <FaBusinessTime className="text-6xl text-primary" />
                    <div>
                        <h1 className="text-xl font-semibold">We are open from Monday-Friday</h1>
                        <h1 className="text-lg">7:00 AM - 9:00 PM</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mx-auto">
                    <FaPhoneAlt className="text-6xl text-primary" />
                    <div>
                        <h1 className="text-xl font-semibold">Have a Question?</h1>
                        <h1 className="text-lg">+000 1223 4455 666</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mx-auto">
                    <FaAddressBook className="text-6xl text-primary" />
                    <div>
                        <h1 className="text-xl font-semibold">Need a Session? Our Address:</h1>
                        <h1 className="text-lg">Brooklyn, New York</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Information;