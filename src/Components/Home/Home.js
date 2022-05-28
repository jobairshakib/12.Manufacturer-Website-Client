import Products from '../Products';
import Reviews from '../Reviews';
import Summary from '../Summary/Summary';
import Banner from './Banner';
import Contact from './Contact';
import DeliveryInfo from './DeliveryInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <DeliveryInfo></DeliveryInfo>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;