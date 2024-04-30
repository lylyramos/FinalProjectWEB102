import React, { useState } from 'react';

const Comments = ({ postId }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() !== '') {
            // Save comment to database or state
            setComments([...comments, { text: comment }]);
            setComment('');
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={comment} onChange={handleChange} placeholder="Add a comment..." />
                <br />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((c, index) => (
                    <li key={index}>{c.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
