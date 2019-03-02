import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let buttonElem = React.createRef();
    let textArea = React.createRef();

    let addPost = () => {
        let textData = textArea.current.value;
       // props.postsData.message = [id:3, message:]
    };


    let posts = props.postsData.map (p =>  <Post message={p.message} likecounts={p.likesCount}/>);
    return (
        <div className={profile.posts}>
            My posts
            <div>
                <textarea ref={textArea} ></textarea>
                <button ref={buttonElem} onClick={addPost}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default MyPosts;