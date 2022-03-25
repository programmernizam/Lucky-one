import './Shop.css'
import React, { useEffect, useState } from 'react';
import Mobile from '../Mobile/Mobile';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('mobiledb.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container mt-5'>
            <div className="container-fluid row">
                <div className="col-8 container">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {products.map(product => <Mobile product ={product} key={product.id}/>)}
                    </div>
                </div>
                <div className="col-4">
                    <h2>This is cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;