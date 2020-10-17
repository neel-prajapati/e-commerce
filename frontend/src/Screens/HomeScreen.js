import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';

function HomeScreen(props)
{
    const productList = useSelector(state=>state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        
        return () => {
            //
        };
        // eslint-disable-next-line
    }, [])
    return loading?<div>Loading...</div>:
error?<div>Error: {error}</div>:
    <ul className="products">
    {
        products.map(product =>
            <li key={product._id}>
        <div className="product">
        <Link to={'/product/'+product._id}><img className="product-image" src={product.image} alt="Iphone11"></img></Link>
            <div className="product-name">
                <Link to={'/product/'+product._id}>{product.name}</Link>
                </div>
            <div className="product-brand">{product.brand}</div>
<div className="product-price">₹{product.price}</div>
<div className="product-ratings">{product.rating} Star ({product.numReviews} Reviews)</div>
        </div>
    </li>
)
    }
    
</ul>
}

export default HomeScreen;