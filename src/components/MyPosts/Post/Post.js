import React, {Component} from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return (

        <div className="row">
            <div className="col-3">
                <img className="img-thumbnail" src="https://zestedesavoir.com/media/galleries/3889/770e9ded-c47a-4d9a-94e1-15694a9e5df1.jpeg" alt=""/>
            </div>
            <div className="col-9 card">
                    {props.message}
            </div>
            <div className="col-12"><span className={post.like}>{props.likecounts}</span></div>
        </div>

    );
}

export default Post;