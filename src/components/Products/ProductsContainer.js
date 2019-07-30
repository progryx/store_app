//imports
import React from 'react';
import {connect} from "react-redux";
import Products from "./Products";
import {getProducts} from "../../redux/products-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// main class
class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.getProducts();
    }


    render() {
        return <Products {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        products: state.productPage.products

    }
};


export default compose(connect(mapStateToProps, {getProducts}),withAuthRedirect)(ProductsContainer);
