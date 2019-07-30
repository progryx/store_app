//imports
import React from 'react';
import Product from "./Product";
import {connect} from "react-redux";
import compose from "redux/src/compose";
import {addToCart, removeFromCart} from "../../redux/cart-reducer";


// main class
class ProductContainer extends React.Component {


    render() {
        return <Product {...this.props}  />
    }
}

// let mapStateToProps = (state) => ({
//     hotel: state.hotelPage.hotel
// });

export default compose(
    connect(null,{addToCart,removeFromCart})
)(ProductContainer);
