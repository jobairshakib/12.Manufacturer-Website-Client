import React, { useState } from 'react';            
import Loading from '../Loading/Loading';
import Products from '../Products';
import Reviews from '../Reviews';
import Summary from '../Summary/Summary';
import Banner from './Banner';

const Home = () => {
    const [products, setProducts] = useState([]);
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;