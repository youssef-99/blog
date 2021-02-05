import React, { useState } from 'react';
import axios from 'axios';
export default () => {
    const [title, setTitle] = useState('');
    const onSubmit = async(event) => {
        event.preventDefault();

        await axios.post('http://youssef.com/posts/create', {
            title
        });
        setTitle('');
    };
    return (
        <div className="card mt-5">
            <div className="card-header">
                Create Post
            </div>
            <div className="card-body">
                <form onSubmit = {onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};
