import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {setAuth} from "../redux/auth-reducer";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        componentDidMount(){
            this.props.setAuth();
        }

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps,{setAuth})(RedirectComponent);

    return ConnectedRedirectComponent
}