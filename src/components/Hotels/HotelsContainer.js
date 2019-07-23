import React from 'react';
import {connect} from "react-redux";
import Hotels from "./Hotels";
import Preloader from "../Preloader/Preloader";
import {getHotels} from "../../redux/hotels-reducer";


class HotelsContainer extends React.Component {

    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    }

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
        this.props.getHotels();
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Hotels
                hotels={this.props.hotels}
            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        hotels: state.hotelsPage.hotels,
        isFetching: state.hotelsPage.isFetching,
    }
};


export default connect(mapStateToProps, { getHotels })(HotelsContainer);