import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = (props) => {

//debugger;
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
                 // postsData={props.postsData}
                // dispatch={props.dispatch}
                // store={props.store}
        />
    </div>;
}

export default Profile;