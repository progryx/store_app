import React, {Component} from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      onPostChange: (text) => {
          let action = updatePostActionCreator(text); // создаем экшен, функция в редюсере
          dispatch(action); // диспатчим экшен
      },
      addPost: () => { // функция создания экшена и его диспатча
          let action = addPostActionCreator();
          dispatch(action);  // экщен нужен для понимания какие данные мы изменяем в стейте
      }
  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;