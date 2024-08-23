import Lottie from "lottie-react";

import animationData from "../../../public/Animation - 1723827283809.json"
import { Link, useNavigate } from "react-router-dom";


import useAuth from "../../hooks/useAuth";
const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.data)

                navigate('/')


            })
            .catch(error => console.log(error));

    }
    return (

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