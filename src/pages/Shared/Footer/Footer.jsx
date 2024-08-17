
import logo from "../../../assets/logo-svg.jpg"
const Footer = () => {
    return (
        // <footer className="footer bg-base-200 text-base-content p-10">
        //     <aside>
        //         <img src={logo}></img>
        //         <p>
        //             Esthetica Salon
        //             <br />
        //             Providing reliable service since 2018
        //         </p>
        //     </aside>
        //     <nav>
        //         <h6 className="footer-title">Services</h6>
        //         <a className="link link-hover">Branding</a>
        //         <a className="link link-hover">Design</a>
        //         <a className="link link-hover">Marketing</a>
        //         <a className="link link-hover">Advertisement</a>
        //     </nav>
        //     <nav>
        //         <h6 className="footer-title">Company</h6>
        //         <a className="link link-hover">About us</a>
        //         <a className="link link-hover">Contact</a>
        //         <a className="link link-hover">Jobs</a>
        //         <a className="link link-hover">Press kit</a>
        //     </nav>
        //     <nav>
        //         <h6 className="footer-title">Legal</h6>
        //         <a className="link link-hover">Terms of use</a>
        //         <a className="link link-hover">Privacy policy</a>
        //         <a className="link link-hover">Cookie policy</a>
        //     </nav>
        // </footer>
        <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-between">
            <aside className="w-full sm:w-auto mb-4 sm:mb-0 flex flex-col items-center sm:items-start">
                <img src={logo} alt="Esthetica Salon Logo" className="w-24 sm:w-32 md:w-40 mb-4" />
                <p className="text-center sm:text-left">
                    Esthetica Salon
                    <br />
                    Providing reliable service since 2018
                </p>
            </aside>
            <nav className="w-full sm:w-auto flex flex-col sm:ml-8">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="w-full sm:w-auto flex flex-col sm:ml-8">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="w-full sm:w-auto flex flex-col sm:ml-8">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>

    );
};

export default Footer;