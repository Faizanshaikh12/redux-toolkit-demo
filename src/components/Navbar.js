import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = (props) => {
    const items = useSelector((state) => state.cart);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to='/'>HOME</Link>
                <Link className="navLink" to='/cart'>CART</Link>
                <span className="cartCount">Cart Items: {items.length}</span>
            </div>
        </div>
    );
}

export default Navbar;