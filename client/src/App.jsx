import React from 'react';
import PostCreate from './PostCreate'
import PostList from './PostList'
export default () => {
    return <div className = "container">
        <PostCreate />
        <hr></hr>
        <PostList />
    </div>;
};