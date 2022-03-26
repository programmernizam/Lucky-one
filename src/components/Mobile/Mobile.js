import './Mobile.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Mobile = ({product, addToCart}) => {
    const {img, name} = product;
    return (
        <div className='col'>
            <div className="card h-100">
            <img src={img} alt="" />
            <div className="card-body">
                <h4 className='card-title text-center'>{name}</h4>
            </div>
            <button onClick={()=>addToCart(product)} className='btn d-flex align-items-center p-0 justify-content-center cart-btn'>
                <p className='mt-3 me-2'>Add to cart</p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
            </div>
        </div>
    );
};

export default Mobile;