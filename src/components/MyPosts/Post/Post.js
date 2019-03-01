import React, {Component} from 'react';
import post from './Post.module.css';

const Post = (props) => {
    return (

        <div className={post.item}>
            <img src="https://zestedesavoir.com/media/galleries/3889/770e9ded-c47a-4d9a-94e1-15694a9e5df1.jpeg" alt=""/>
            <div className={post.text_block}>
                {props.message}
            </div>
            <span className={post.like}>{props.likecounts}</span>
        </div>

    );
}

export default Post;