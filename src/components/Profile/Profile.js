import React, {Component} from 'react';
import profile from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'Hello. I\'m ok',  likesCount: 15}
    ];

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {postsData}/>
        </div>
    );
}

export default Profile;