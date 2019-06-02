import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    };

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
            if (response.data.resultCode == 0) {
                let {id, login, email} = response.data.data;
                debugger;
                this.props.setAuthUserData(id, email, login);
            }
        });

    };

    render() {
        return <div>
            <Header {...this.props}/>
        </div>
    };
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);