import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');

        setPosts(res.data);
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    const renderedPosts = Object.values(posts).map(post => {
        return <div
            className="card"
            style={{ width: '42%', margin: '20px' }}
            key={post.id}
        >
            <div className="card-header"> <strong>
                {post.title}
            </strong></div>
            <div className="card-body">
                <CommentList comments = {post.comments}/>
            </div>
            <div className="card-footer">
                <CommentCreate postId={post.id} />
            </div>
        </div>
    });
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>;
};