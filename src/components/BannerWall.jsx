

const BannerWall = ({ title, subtitle, backgroundImage }) => {
    return (
        <div
            className="relative w-full h-64 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl font-bold">{title}</h1>
                {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
            </div>
        </div>
    );
};

export default BannerWall;