import './Shop.css'
import React, { useEffect, useState } from 'react';
import Mobile from '../Mobile/Mobile';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [addCart, setAddCart] = useState([]);
    useEffect(()=>{
        fetch('mobiledb.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) =>{
        const newCart = [...addCart, product];
        if(newCart.length > 4){
            alert('Already 4items added');
            return;
        }
        else{
            setAddCart(newCart);
        }
    }
    return (
        <div className='shop-container mt-5'>
            <div className="container-fluid row">
                <div className="col-8 container">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {products.map(product => <Mobile product ={product} key={product.id} addToCart = {addToCart}/>)}
                    </div>
                </div>
                <div className="col-4">
                    {
                        addCart.map(mobile => <Cart mobile = {mobile}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;