import React, {Component} from 'react';
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

    let posts = props.postsData.posts.map(p => <Post message={p.message} likecounts={p.likesCount}/>);

    return (
        <div className='container'>
            <div className="form-row mt-2 mb-2">
                <textarea className="form-control mb-2 mt-2" ref={textArea} onChange={postChange}
                          value={props.postsData.newPost}/>
                <button className="btn btn-primary form-control" ref={buttonElem} onClick={props.addPost}>Add post</button>
            </div>
            <div className='container'>{posts}</div>
        </div>
    );

}

export default MyPosts;