import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    };

    render() {
        return <Header {...this.props} />

    };
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {})(HeaderContainer);