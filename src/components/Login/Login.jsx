import React from 'react';
import {connect} from "react-redux";
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {loginUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import md5 from 'md5';

const Login = (props) => {
    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
    const onSubmit = (data) => {
        props.loginUser(data.email, md5(data.password));
    };

    if (props.isAuth) return <Redirect to={`/store`} />

    return (
        <LoginReduxForm
            {...props}
            onSubmit={onSubmit}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
};

 export default compose( connect(mapStateToProps,{loginUser}))(Login);


