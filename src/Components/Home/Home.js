import React, { useState } from 'react';            
import Loading from '../Loading/Loading';
import Products from '../Products';
import Reviews from '../Reviews';
import Summary from '../Summary/Summary';
import Banner from './Banner';
import Contact from './Contact';

const Home = () => {
    const [products, setProducts] = useState([]);
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;