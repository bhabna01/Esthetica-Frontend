import Lottie from "lottie-react";
import animationData from "../../../public/404.json"
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Lottie animationData={animationData} loop={true} className="w-1/2 h-auto" />

            <a href="/" className="mt-6 text-blue-500 underline">Go back to Home</a>
        </div>
    );
};

export default ErrorPage;