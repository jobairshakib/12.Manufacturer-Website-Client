import React from 'react';
import Loading from '../Loading/Loading';
import Summary from '../Summary/Summary';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
        </div>
    );
};

export default Home;