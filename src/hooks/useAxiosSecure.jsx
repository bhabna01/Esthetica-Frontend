import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
    baseURL: 'https://esthetica-backend.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("Error tracked in the interceptor", error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("Logout the user")
                logOut()
                    .then(() => {
                        navigate("/login")
                    })
                    .catch(error => console.log(error))
            }


        })
    }, [])
    return axiosSecure
};

export default useAxiosSecure;