import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsData = props.postsData;

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