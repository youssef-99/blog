import React , { useState }from 'react';
import axios from 'axios';
export default ({ postId }) => {
    const [content, setContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://youssef.com/posts/${postId}/comments`, {
            content
        });
        setContent('');
    };
    return <div>
        <form onSubmit = {onSubmit} >
            <div className="form-group">
                <label>New Comment</label>
                <input type= "text" placeholder = "Your comment..." value = {content} onChange = {e => setContent(e.target.value)} className ="form-control"/>
            </div>
            <button className = "btn btn-primary">Submit</button>
        </form>
    </div>;
}; 