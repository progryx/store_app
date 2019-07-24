//imports
import React from 'react';
import Hotel from "./Hotel";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getHotel, setHotel} from "../../redux/hotel-reducer";
import compose from "redux/src/compose";


// main class
class HotelContainer extends React.Component {

    componentDidMount() {
        this.props.getHotel(this.props.match.params.hotelId) // set hotel page by ID
    }

    render() {
        return <Hotel {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    hotel: state.hotelPage.hotel
});

export default compose(
    connect(mapStateToProps, {setHotel, getHotel}),
    withRouter
)(HotelContainer);
