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
        }
        else{
            setAddCart(newCart);
        }
    }

    const clearCart = () =>{
        setAddCart([]);
    }
    return (
        <div className='shop-container mt-5 container-fluid'>
            <div className="row">
                <div className="col-8 container">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {products.map(product => <Mobile product ={product} key={product.id} addToCart = {addToCart}/>)}
                    </div>
                </div>
                <div className="col-4">
                   <div className="cart-container p-2 shadow-lg rounded">
                   {
                        addCart.map(mobile => <Cart mobile = {mobile}key={mobile.id}/>)
                    }
                        <div>
                            <button className='btn choice-btn d-block'>Suggest One</button>
                            <button onClick={()=>clearCart()} className='btn choice-btn'>Remove All</button>
                        </div>
                    </div>
                   </div>
            </div>
        </div>
    );
};

export default Shop;