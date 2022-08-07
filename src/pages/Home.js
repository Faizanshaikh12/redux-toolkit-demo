import React from 'react';
import Products from "../components/Products";

const Home = (props) => {
    return (
        <div>
            <h2 className="heading">Welcome to the Redux toolkit store</h2>
            <section>
                <h3 className="heading">Products</h3>
            <Products/>
            </section>
        </div>
    );
}

export default Home;