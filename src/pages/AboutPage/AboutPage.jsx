import BannerWall from "../../components/BannerWall";

import bannerImage from "../../assets/About5.jpg"
const AboutPage = () => {




    const teamMembers = [
        {
            name: 'Alice Johnson',
            title: 'Master Stylist',
            image: ' https://i.ibb.co/JdtWGc1/member3.jpg',
        },
        {
            name: 'Sophia Williams',
            title: 'Senior Esthetician',
            image: 'https://i.ibb.co/ftLdmXs/member2.png',
        },
        {
            name: 'Liam Brown',
            title: 'Hair Specialist',
            image: 'https://i.ibb.co/kmBd9sm/member1.jpg',
        },
    ];

    const galleryImages = [
        'https://i.ibb.co/8NNk2HN/galary1.jpg',
        'https://i.ibb.co/YhQ4Wzb/galary2.jpg',
        'https://i.ibb.co/7WcRBwf/galary3.jpg',

    ];

    const handleMoreInfo = (member) => {
        alert(`More info about ${member.name}: ${member.title}`);
    };
    return (
        <div>
            <BannerWall
                title="About"
                subtitle="Home/About"
                backgroundImage={bannerImage}
            >

            </BannerWall>
            <section className="py-12 bg-base-100 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">Welcome to Esthetica</h2>
                    <p className="text-lg text-base-content mb-4">
                        At Esthetica, we believe that beauty is an art, and every client deserves to feel like a masterpiece. Our experienced team of beauty experts is dedicated to providing you with personalized services that enhance your natural beauty and boost your confidence.
                    </p>
                    <p className="text-lg text-base-content">
                        From rejuvenating facials to luxurious hair treatments, Esthetica is your go-to destination for all things beauty. Step into our serene salon and let us pamper you with our exceptional services and high-quality products.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-base-200">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold text-center text-primary mb-6">Meet Our Expert Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={member.image} alt={member.name} className="rounded-t-lg h-[200px]" />
                                </figure>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-xl font-semibold">{member.name}</h4>
                                    <p className="text-base-content">{member.title}</p>
                                    <button className="btn btn-outline btn-primary mt-4" onClick={() => handleMoreInfo(member)}>
                                        More About {member.name}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-base-100 text-center">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold text-primary mb-6">Our Work</h3>
                    <div className="carousel w-full max-w-md mx-auto">
                        {galleryImages.map((image, index) => (
                            <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                                <img src={image} alt="Gallery Image" className="rounded-lg shadow-lg w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={`#slide${index === 0 ? galleryImages.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${index === galleryImages.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutPage;