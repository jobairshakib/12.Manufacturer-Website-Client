import { useState, useEffect } from 'react';

const usePurchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-temple-05921.herokuapp.com/items`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, []);
    return [purchases, setPurchases];
};

export default usePurchases;