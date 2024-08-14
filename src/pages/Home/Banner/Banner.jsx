import img1 from "../../../assets/pic6.jpg"
import img2 from "../../../assets/pic7.jpeg"
import img3 from "../../../assets/pic8.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute flex h-full left-0 bg-gradient-to-r from-black to-[rgba(21,21,21,0)] top-0  items-center">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable prices for beauty Service</h2>
                        <p>Elevate Your Beauty, Embrace Your Confidence – Experience Luxury with Every Service.</p>
                        <div>
                            <button className="btn btn-outline btn-primary mr-5">Discover Services</button>
                            <button className="btn btn-outline btn-secondary">Learn more</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute flex h-full left-0 bg-gradient-to-r from-black to-[rgba(21,21,21,0)] top-0  items-center">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable prices for beauty Service</h2>
                        <p>Elevate Your Beauty, Embrace Your Confidence – Experience Luxury with Every Service.</p>
                        <div>
                            <button className="btn btn-outline btn-primary mr-5">Discover Services</button>
                            <button className="btn btn-outline btn-secondary">Learn more</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute flex h-full left-0 bg-gradient-to-r from-black to-[rgba(21,21,21,0)] top-0  items-center">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-6xl font-bold">Affordable prices for beauty Service</h2>
                        <p>Elevate Your Beauty, Embrace Your Confidence – Experience Luxury with Every Service.</p>
                        <div>
                            <button className="btn btn-outline btn-primary mr-5">Discover Services</button>
                            <button className="btn btn-outline btn-secondary">Learn more</button>
                        </div>
                    </div>

                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;