import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
   //debugger;
    let buttonElem = React.createRef();
    let textArea = React.createRef();


    let postChange = () => {
      //  debugger;
        let text = textArea.current.value;
        props.onPostChange(text);
    };

    let posts = props.postsData.posts.map (p =>  <Post message={p.message} likecounts={p.likesCount}/>);

    return (
        <div className={profile.posts}>
            My posts
            <div>
                <textarea ref={textArea} onChange={postChange} value={props.postsData.newPost}/>
                <button ref={buttonElem} onClick={props.addPost}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default MyPosts;