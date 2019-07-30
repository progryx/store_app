//imports
import React, {Component, useEffect, useState} from 'react';


//main function
const Product = (props) => {

  //  debugger;
    // Output
    return <div className="col-12 py-2">
        <div key={props.id} className="card h-100">

            <div className="card-body row">
                <div className="col-4">
                    <img className="img-thumbnail" src={props.image} alt=""/>
                </div>
                <div className="col-4">
                    <b className='card-title'>{props.name}</b>
                    <span className=''>{props.color}</span>
                </div>
                <div className="col-4">
                    <div className={`pb-3 stars star_` + props.raiting}></div>
                    {props.inStock
                    ? <span className={'badge badge-primary'}>Available</span>
                    : <span className={'badge badge-danger'}>Not available</span>
                    }
                    <p className={'card-title'}>{props.price} $</p>

                    {props.inStock
                        ? <button className="btn btn-success" onClick={() => props.addToCart(props.id)}>Add to cart</button>
                        : <button className="btn btn-success" disabled >Add to cart</button>
                    }

                </div>
            </div>
        </div>
    </div>
};

export default Product;