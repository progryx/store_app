import React, {Component} from 'react';
import profile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let buttonElem = React.createRef();
    let textArea = React.createRef();


    let onPostChange = () => {
        //debugger;
        let textData = textArea.current.value;
        props.dispatch({type:'CHANGE-NEW-POST',value:textData});

    };

    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    };

    let posts = props.postsData.map (p =>  <Post message={p.message} likecounts={p.likesCount}/>);
   // debugger;
    return (
        <div className={profile.posts}>
            My posts
            <div>
                <textarea ref={textArea} onChange={onPostChange} value={props.newPost}/>
                <button ref={buttonElem} onClick={addPost}>Add post</button>
            </div>

            {posts}
        </div>
    );
}

export default MyPosts;