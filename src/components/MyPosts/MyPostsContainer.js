import React, {Component} from 'react';
import {addPost, updatePost} from "../../redux/profile-reducer";
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


const MyPostsContainer = connect(mapStateToProps,{addPost, updatePost})(MyPosts); // создаем контейнер-компоненту, с данными и функциями из ф-й выше
// ВАЖНО: коннект делает свой субскрайб (подписка на изменение данных в СТОРе),

export default MyPostsContainer;