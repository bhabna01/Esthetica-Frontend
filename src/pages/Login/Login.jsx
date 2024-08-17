import Lottie from "lottie-react";

import animationData from "../../../public/Animation - 1723827283809.json"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);


                // get access token


            })
            .catch(error => console.log(error));

    }
    return (
        // <div className="hero bg-base-200 min-h-screen">
        //     <div className="hero-content flex-col lg:flex-row">

        //         <div className=" ">
        //             <Lottie animationData={animationData} style={{ width: 700, height: 500 }} />
        //         </div>

        //         <div className="card bg-base-100 sm:justify-center lg:w-[700px] lg:h-[500px] max-w-sm shrink-0 shadow-2xl">
        //             <h1 className="text-2xl font-bold text-center mt-9">Login now</h1>
        //             <form onSubmit={handleLogin} className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        //                     <label className="label">
        //                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <input className="btn btn-primary" type="submit" value="Login" />
        //                 </div>
        //             </form>
        //             <p className="text-center mb-8">New to this website?<Link className="text-primary" to='/signup'>Sign Up</Link></p>
        //         </div>
        //     </div>
        // </div>
        <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col lg:flex-row-reverse lg:justify-center lg:items-center">
                <div className="lg:hidden mt-6 flex justify-center">
                    <Lottie animationData={animationData} style={{ width: 350, height: 250 }} />
                </div>

                <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:w-[700px] lg:h-[500px] shadow-2xl flex justify-center items-center">
                    <div className="w-full p-8">
                        <h1 className="text-2xl font-bold text-center mt-9">Login now</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center mb-8">New to this website?<Link className="text-primary" to='/signup'>Sign Up</Link></p>
                    </div>
                </div>

                <div className="hidden lg:flex lg:ml-12">
                    <Lottie animationData={animationData} style={{ width: 700, height: 500 }} />
                </div>
            </div>
        </div>

    );
};

export default Login;