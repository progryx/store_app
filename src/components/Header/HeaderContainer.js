import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut, setAuth} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    };

    componentDidMount() {
        this.props.setAuth();
    };

    render() {
        return <Header {...this.props} />

    };
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {setAuth,logOut})(HeaderContainer);