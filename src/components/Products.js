import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add} from "../store/cartSlice";
import {getProducts, STATUS} from "../store/productSlice";

const Products = (props) => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.products)
    useEffect(() => {
            dispatch(getProducts());
    }, []);

    const handleAddToCart = (product) => {
     dispatch(add(product));
    }

    if(status === STATUS.LOADING){
        return <h2>Loading...</h2>
    }

    if(status === STATUS.ERROR){
        return <h2>Something went wrong!</h2>
    }

    return (
        <div className="productsWrapper">
            {products.map(product => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;