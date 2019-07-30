import React from 'react';
import login from './singup.module.css';
import {Field} from "redux-form";


export const SignUpForm = (props) => {
    return (
        <form action="" className={login.form} onSubmit={props.handleSubmit}>
            <h1 className={login.header}>{'Join us!'}</h1>
            <label htmlFor="inputEmail" className={login.email_label}>{'Email address'}</label>
            <Field component={"input"} name={"email"} type="email" id="inputEmail" className={login.email_input + ' form-control'}
                   placeholder="Email address" required="" autoFocus=""/>
            <label htmlFor="inputPassword" className={login.pass_label}>{'Password'}</label>
            <Field component={"input"} name={"password"} type="password" id="inputPassword" className={login.password_input + ' form-control'}
                   placeholder="Password" required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">{'Register'}</button>
        </form>
    );
};
