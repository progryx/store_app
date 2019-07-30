//imports
import React from 'react';
import Filter from "./Filter";
import {connect} from "react-redux";
import compose from "redux/src/compose";
import {setFilter} from "../../redux/products-reducer";


// main class
class FilterContainer extends React.Component {

    render() {
        return <Filter {...this.props}  />
    }
}

// let mapStateToProps = (state) => ({
//     hotel: state.hotelPage.hotel
// });

export default compose(
    connect(null,{
        setFilter
    })
)(FilterContainer);
