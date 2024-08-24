import BannerWall from "../../components/BannerWall";

import bannerImage from "../../assets/About5.jpg"
const AboutPage = () => {
    return (
        <div>
            <BannerWall
                title="About"
                subtitle="Home/About"
                backgroundImage={bannerImage}
            >

            </BannerWall>

        </div>
    );
};

export default AboutPage;