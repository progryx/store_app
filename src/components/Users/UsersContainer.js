import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setLoadingStatus, setTotalUsers,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios/index";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    }

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
      //  debugger;
        this.props.setLoadingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
            console.log(this.props);
            this.props.setLoadingStatus(false);
            //alert(this.props.isFetching);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setLoadingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setLoadingStatus(false);
        });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsers, setLoadingStatus
    })(UsersContainer);


// Запись  {
//         follow,
//         unfollow
//     }
// Эквивалентна
// {
//     follow: follow,
//     unfollow: unfollow
// }