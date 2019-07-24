//imports
import React, {Component} from 'react';
import {reduxForm} from "redux-form";
import {BookForm} from "../Forms/BookForm";


//main function
const Hotel = (props) => {
    const BookingForm = reduxForm({form: 'booking'})(BookForm);
    const onSubmit = (data) => {
        alert('You are successfully booked room. We are waiting for you at - ' + data.date_arrival)
    };
    return <div className='card'>
        <img src={props.hotel.image} className="card-img-top" alt=""/>
        <h5 className="card-header">{props.hotel.name}
            <div className={`pb-3 pt-1 stars star_` + props.hotel.stars}></div>
        </h5>
        <div className="card-body">
            <div className="alert alert-primary" role="alert">
                {props.hotel.city}
            </div>
            <p className="card-text font-weight-light text-justify">
                <b>Description:</b> <br/>{props.hotel.description}
            </p>
            <BookingForm onSubmit={onSubmit} {...props} />
        </div>
    </div>
};

export default Hotel;