import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";



const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetch data or load assets)
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the delay as needed
    }, []);
    return (
        // <div>
        //     <Header></Header>
        //     <Outlet></Outlet>
        //     <Footer></Footer>
        // </div>
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}
        </>
    );
};

export default Main;