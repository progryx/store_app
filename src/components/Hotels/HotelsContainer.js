//imports
import React from 'react';
import {connect} from "react-redux";
import Hotels from "./Hotels";
import {getHotels, getResult} from "../../redux/hotels-reducer";
import {randomNumberSeria} from "../../api/api";

// main class
class HotelsContainer extends React.Component {

    componentDidMount() {
        this.props.getHotels(randomNumberSeria(0, 19, 5));
    }

    render() {
        return <Hotels {...this.props}/>
    };
}

let mapStateToProps = (state) => {
    return {
        hotels: state.hotelsPage.hotels
    }
};


export default connect(mapStateToProps, {getHotels, getResult})(HotelsContainer);