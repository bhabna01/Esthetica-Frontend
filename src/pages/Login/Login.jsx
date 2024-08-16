import Lottie from "lottie-react";
import img from "../../assets/login.png"
import animationData from "../../../public/Animation - 1723827283809.json"
import { Link } from "react-router-dom";
const Login = () => {
    const handleLogin = event => {

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className="text-center lg:text-left w-1/2 mr-12">
                    <img className="w-[700px] h-[500px] " src={img}></img>


                </div> */}
                <div className=" ">
                    <Lottie animationData={animationData} style={{ width: 700, height: 500 }} />
                </div>

                <div className="card bg-base-100 sm:justify-center lg:w-[700px] lg:h-[500px] max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-bold text-center mt-9">Login now</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New to this website?<Link to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;