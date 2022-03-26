import './Cart.css'
import React from 'react';

const Cart = ({mobile}) => {
    const {img, name} = mobile;
    return (
        <div className='cart-items'>
            <div className="row mb-2">
            <div className="col-md-3 text-start">
                <img className='rounded w-75' src={img} alt="" />
            </div>
            <div className="col-md-9 text-start">
                <p className='fw-bold'>{name}</p>
            </div>
            </div>
        </div>
    );
};

export default Cart;