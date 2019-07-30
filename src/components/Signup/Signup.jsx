import React from 'react';
import {connect} from "react-redux";
import {SignUpForm} from "./SignUpForm";
import {reduxForm} from "redux-form";
import {signUpUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import md5 from 'md5';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Signup = (props) => {
    const SignupReduxForm = reduxForm({form: 'signup'})(SignUpForm);
    const onSubmit = (data) => {
        props.signUpUser(data.email, md5(data.password));
    };



    return (
        <SignupReduxForm
            {...props}
            onSubmit={onSubmit}
        />
    )
};


 export default compose(connect(null,{signUpUser}))(Signup);

