import React, {Component} from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => { // СТОР передается из коннекта (стор), т.е это мы прокидываем в компоненту MyPosts -
                                    // аттрибут postsData = {state.profilePage}
    return {
        postsData: state.profilePage // эквив. <MyPosts  postsData = {state.profilePage} />
                                    // каждый раз когда меняется СТОР запускается эта функция и -
                                    // происходит сравнение этих значений со СТОРом, в т.ч ссылок на объекты
                                    // если ссылки на объекты одинаковые, то СТОР не меняется и перерерисовки не происходит
    }
};

let mapDispatchToProps = (dispatch) => { // диспатч оттуда же, что и СТОР
  return {
      onPostChange: (text) => { // эквив. <MyPosts  onPostChange = {onPostChange} />(функция) />
        //  debugger;
          let action = updatePostActionCreator(text); // создаем экшен, функция в редюсере
          dispatch(action); // диспатчим экшен
      },
      addPost: () => { // функция создания экшена и его диспатча
          let action = addPostActionCreator();
          dispatch(action);  // экщен нужен для понимания какие данные мы изменяем в СТОРе
      }
  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts); // создаем контейнер-компоненту, с данными и функциями из ф-й выше
// ВАЖНО: коннект делает свой субскрайб (подписка на изменение данных в СТОРе),

export default MyPostsContainer;