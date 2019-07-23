import React from 'react';
import Hotel from "./Hotel";
import {connect} from "react-redux";
import {setHotel} from "../../redux/hotel-reducer";



class HotelContainer extends React.Component{

    componentDidMount() {
        this.props.getCurrentHotel(this.props.match.params.userId)
    }

    render() {
    return <div>
        <Hotel {...this.props} profile={this.props.profile}/>
    </div>
    }
}

let mapStateToProps = (state) => ({
    hotel: state.hotelPage.hotel,
});

export default connect (mapStateToProps, { setHotel, getHotel })(HotelContainer);
