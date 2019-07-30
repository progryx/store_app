//imports
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Product from "../Product/Product";
import ReactModal from 'react-modal';
import {addToCart, removeFromCart} from "../../redux/cart-reducer";
import ProductContainer from "../Product/ProductContainer";
import FilterContainer from "../Filter/FilterContainer";

// main function
const Products = (props) => {


    return <div className='container'>

        <FilterContainer/>
        <div className='row'>
            {
                props.products.map(p => <ProductContainer
                        id={p.id}
                        name={p.name}
                        color={p.color}
                        issueDate={p.issueDate}
                        image={p.image}
                        inStock={p.inStock}
                        price={p.price}
                        raiting={p.raiting}
                    />
                )
            }
        </div>
    </div>


};

export default Products;