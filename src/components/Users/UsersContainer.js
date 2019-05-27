import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsers,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios/index";
import Users from "./Users";


class UsersContainer extends React.Component {

    constructor(props) { // создаем конструктор
        super(props); // передаем конструирование пропсов родителю
    }

    componentDidMount() { // элемент ЖЦ, вызывается после отрисовки компоненты.
        //alert('mounted');
        // debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            //  debugger;
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });

    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         //  debugger;
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             //  debugger;
    //             this.props.setUsers(response.data.items);
    //         });
    //
    //         // props.setUsers([
    //         //     {id: 1, photoUrl: 'https://cs8.pikabu.ru/avatars/2737/v2737573-1578567675.png', followed: true, fullName: 'Daenerys', status: 'I am cool', location: {city: 'Kings Landing', country: 'Vesteros'}},
    //         //     {id: 2, photoUrl: 'https://cs8.pikabu.ru/avatars/933/v933333-2130718137.png', followed: true, fullName: 'Max', status: 'I am bad', location: {city: 'Moscow', country: 'Russia'}},
    //         //     {id: 3, photoUrl: 'https://cs8.pikabu.ru/avatars/1757/v1757641-107825703.png', followed: true, fullName: 'Vasya', status: 'I am bro', location: {city: 'Kazan', country: 'Russia'}},
    //         //     {id: 4, photoUrl: 'https://cs8.pikabu.ru/avatars/2495/v2495311-1537928548.png', followed: false, fullName: 'Lesha', status: 'Go go power rangers', location: {city: 'Moscow', country: 'Russia'}}
    //         // ]);
    //     }
    // };

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            //  debugger;
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        //    debugger;
        return <Users
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
        />
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
};


export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsers
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