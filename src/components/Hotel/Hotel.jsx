//imports
import React, {Component, useEffect, useState} from 'react';
import {reduxForm} from "redux-form";
import {BookForm} from "../Forms/BookForm";
import ReactModal from 'react-modal';

//main function
const Hotel = (props) => {

    // Hooks
    const [opened, setOpened] = useState(false);
    const [arrDate, setArrDate] = useState('');

    // Form settings
    const BookingForm = reduxForm({form: 'booking'})(BookForm);
    const onSubmit = (data) => {
        setArrDate(data.date_arrival);
        setOpened(true);
    };
    // Output
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
            <ReactModal isOpen={opened} onRequestClose={setOpened} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Succesfull booking!</h5>
                        <button type="button" onClick={() => setOpened(false)} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You are successfully booked room. We are waiting for you at {arrDate} !</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setOpened(false)} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    </div>
};

export default Hotel;