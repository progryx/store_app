import React from 'react';
import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {loginUser} from "../../redux/auth-reducer";

 const Login = (props) => {
    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
    const onSubmit = (data) => {
        let remember_me = data.rememberMe ? data.rememberMe : false;
        props.loginUser(data.email,data.password,remember_me);
    };

    return (
        <LoginReduxForm onSubmit={onSubmit} {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

 export default connect(mapStateToProps,{loginUser})(Login);