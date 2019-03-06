import React, {Component} from 'react';
import profile from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

//debugger;
    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}
                 newPost={props.newPost}
                 dispatch={props.dispatch}/>
    </div>;
}

export default Profile;