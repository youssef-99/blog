import React from 'react'

export default ({comments}) => {
    const renderedComments = Object.values(comments).map(comment => {
        let content;

        if(comment.status === 'approved'){
            content = comment.content;
        }else if(comment.status ===  'pending'){
            content = 'this comment is awaiting for moderation';
        }else{
            content = 'this comment has been rejected';
        }
        return <li key = {comment.id}>
            {content}
        </li>
    });

    return <ul>
        {renderedComments}
    </ul>
};