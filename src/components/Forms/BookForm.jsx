//imports
import React from 'react';
import {Field} from "redux-form";

//main function
export const BookForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit} className='w-50'>

            <label htmlFor="inputDateArrival">{'Arrival date'}</label>
            <Field component={"input"} name={"date_arrival"} type="date" id="inputDateArrival"
                   className={'form-control'} required autoFocus=""/>
            <label htmlFor="inputDateDepart">{'Departure date'}</label>
            <Field component={"input"} name={"date_depart"} type="date" id="inputDateDepart" className={'form-control'}
                   required autoFocus=""/>
            <label htmlFor="countOfPeople">{'Count of people'}</label>
            <Field component={"input"} name={"count"} type="number" id="countOfPeople" min="1" className={'form-control'}
                   required/>
            <button className="btn btn-lg btn-primary btn-block my-2" type="submit">{'Book the room'}</button>
        </form>
    );
};
