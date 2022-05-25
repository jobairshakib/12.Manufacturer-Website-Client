import React from 'react';
import Loading from '../Loading/Loading';
import Reviews from '../Reviews';
import Summary from '../Summary/Summary';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;