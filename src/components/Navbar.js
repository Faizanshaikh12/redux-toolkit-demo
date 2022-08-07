import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to='/'>HOME</Link>
                <Link className="navLink" to='/cart'>CART</Link>
                <span className="cartCount">Cart Items: 0</span>
            </div>
        </div>
    );
}

export default Navbar;