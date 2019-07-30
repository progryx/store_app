//imports
import React, {Component, useEffect, useState} from 'react';
import {Field} from "redux-form";

//main function
const Filter = (props) => {

    //  debugger;
    // Output
    return <div className="col-12 py-2">
        <form action="">
            <div className="form-row ">
                <div className="form-group m-2">
                    <label htmlFor="dateFrom">{'Date from: '}</label>
                    <input type="date" name="dateFrom" className={'form-control'} onChange={props.setFilter}/>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="dateTo">{'Date to: '}</label>
                    <input type="date" name="dateTo" className={'form-control'} onChange={props.setFilter}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="inStock">{'In stock: '}</label>
                    <input type="checkbox" name="inStock" className={'form-control'} onChange={props.setFilter}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group  m-2">
                    <label htmlFor="priceFrom">{'Price from: '}</label>
                    <input type="number" name="priceFrom" className={'form-control'} onChange={props.setFilter}/>
                </div>
                <div className="form-group  m-2">
                    <label htmlFor="priceTo">{'Price to: '}</label>
                    <input type="number" name="priceTo" className={'form-control'} onChange={props.setFilter}/>
                </div>
            </div>
            <div className="form-row m-2">
                <div className="form-group">
                    <select name="color" className={'form-control'} onChange={props.setFilter}>
                        <option value="all">All</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </div>
            </div>

        </form>

    </div>
};

export default Filter;