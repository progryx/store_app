// imports
import React from 'react';
import {logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import {removeFromCart} from "../../redux/cart-reducer";

// main function
class HeaderContainer extends React.Component {

    render() {
        return (
           <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        cart: state.cartPage.cart
    }
};


export default connect(mapStateToProps, {logOut,removeFromCart})(HeaderContainer);