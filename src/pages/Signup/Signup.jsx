import { Link } from "react-router-dom";

import Lottie from "lottie-react";

import animationData from "../../../public/Animation - 1723827283809.json"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }
    return (
        // <div className="hero bg-base-200 min-h-screen">
        //     <div className="hero-content flex-col lg:flex-row">

        //         <div className=" ">
        //             <Lottie animationData={animationData} style={{ width: 700, height: 500 }} />
        //         </div>

        //         <div className="card bg-base-100 sm:justify-center lg:w-[700px]  max-w-sm shrink-0 shadow-2xl">
        //             <h1 className="text-2xl font-bold text-center mt-6">Sign Up</h1>
        //             <form onSubmit={handleSignup} className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
        //                     <input className="btn btn-primary" type="submit" value="Signup" />
        //                 </div>
        //             </form>
        //             <p className="text-center mb-8">Have an Account?<Link className="text-primary" to='/login'>Login</Link></p>
        //         </div>
        //     </div>
        // </div>
        <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col-reverse lg:flex-row lg:justify-center lg:items-center">
                <div className="card bg-base-100 w-full max-w-sm sm:max-w-md lg:w-[700px] shadow-2xl flex justify-center items-center">
                    <div className="w-full p-8">
                        <h1 className="text-2xl font-bold text-center mt-6">Sign Up</h1>
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <p className="text-center mb-8">Have an Account?<Link className="text-primary" to='/login'>Login</Link></p>
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-12 flex justify-center lg:block">
                    <Lottie animationData={animationData} style={{ width: 700, height: 500 }} />
                </div>
            </div>
        </div>

    );
};

export default Signup;