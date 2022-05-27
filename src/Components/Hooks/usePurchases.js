import { useState, useEffect } from 'react';

const usePurchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/purchases`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, []);
    return [purchases, setPurchases];
};

export default usePurchases;