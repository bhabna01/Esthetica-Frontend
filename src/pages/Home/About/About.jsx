import img1 from "../../../assets/about1.jpg"
import img2 from "../../../assets/about2.jpg"
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img
                        src={img2}
                        className="w-3/4 rounded-lg shadow-2xl border-8 border-white" />
                    <img
                        src={img1}
                        className="w-1/2 absolute right-4 -top-4 bottom-0 border-8 border-white  rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 space-y-6 p-4">
                    <h3 className="text-xl text-primary font-bold">About us</h3>
                    <h1 className="text-4xl font-bold">We are Qualified & of experience in this field</h1>
                    <p className="py-6">
                        Our commitment to excellence goes beyond just providing exceptional beauty treatments.We strive to create a warm and welcoming environment where every client feels valued and cared for.
                    </p>
                    <p className="">
                        Whether you are looking for a relaxing facial, a transformative haircut, or a complete beauty makeover, we are here to make your vision a reality. At Esthetica, beauty is more than skin deep its a journey we take together.
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;