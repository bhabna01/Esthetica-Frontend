import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Main = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetch data or load assets)
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the delay as needed
    }, []);
    return (

        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-aos="fade-up">
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
};

export default Main;