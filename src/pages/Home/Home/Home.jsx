
import Information from '../../../components/Information';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
        </div>
    );
};

export default Home;