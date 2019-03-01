import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 10},
        {id: 2, message: 'Hello. I\'m ok',  likesCount: 15}
    ];

    let posts = postsData.map (p =>  <Post message={p.message} likecounts={p.likesCount}/>);
    return (
        <div className={profile.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default MyPosts;