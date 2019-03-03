import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let buttonElem = React.createRef();
    let textArea = React.createRef();


    let onPostChange = () => {
        //debugger;
        let textData = textArea.current.value;
        props.changePost(textData);

    };

    let posts = props.postsData.map (p =>  <Post message={p.message} likecounts={p.likesCount}/>);
    return (
        <div className={profile.posts}>
            My posts
            <div>
                <textarea ref={textArea} onChange={onPostChange} value={props.newPost}/>
                <button ref={buttonElem} onClick={props.addPost}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default MyPosts;