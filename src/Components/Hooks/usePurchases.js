import { useState, useEffect } from 'react';

const usePurchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch(`https://pc-mania.herokuapp.com/purchases`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, []);
    return [purchases, setPurchases];
};

export default usePurchases;