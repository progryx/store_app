import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
   // debugger;
  return {
      follow: (userId) => {
        //  debugger;
          let action = followActionCreator(userId);
          dispatch(action);
      },
      unfollow: (userId) => {
          let action = unfollowActionCreator(userId);
          dispatch(action);
      },
      setUsers: (users) => {
          let action = setUsersActionCreator(users);
          dispatch(action);
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);