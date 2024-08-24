
import logo from "../../../assets/logo-svg.jpg"
const Footer = () => {
    return (


        <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-around items-center">
            <aside className="w-full sm:w-auto mb-6 sm:mb-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src={logo} alt="Esthetica Salon Logo" className="w-24 sm:w-32 md:w-40 mb-4 transition-transform duration-300 hover:scale-105" />
                <p className="text-sm sm:text-base">
                    <strong>Esthetica Salon</strong>
                    <br />
                    Providing reliable service since 2018
                </p>
            </aside>

            <nav className="w-full sm:w-auto mb-6 sm:mb-0 flex flex-col items-center sm:items-start sm:ml-8 text-center sm:text-left">
                <h6 className="footer-title text-lg font-semibold mb-3 text-primary">Company</h6>
                <a className="link link-hover mb-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">About us</a>
                <a className="link link-hover mb-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">Contact</a>
                <a className="link link-hover mb-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">Jobs</a>
                <a className="link link-hover text-sm sm:text-base transition-colors duration-300 hover:text-primary">Press kit</a>
            </nav>

            <nav className="w-full sm:w-auto  mb-6 flex flex-col items-center sm:items-start sm:ml-8 text-center sm:text-left">
                <h6 className="footer-title text-lg font-semibold mb-3 text-primary">Legal</h6>
                <a className="link link-hover mb-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">Terms of use</a>
                <a className="link link-hover mb-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">Privacy policy</a>
                <a className="link link-hover text-sm sm:text-base transition-colors duration-300 hover:text-primary">Cookie policy</a>
            </nav>
        </footer>


    );
};

export default Footer;