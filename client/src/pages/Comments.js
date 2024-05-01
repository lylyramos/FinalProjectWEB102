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
        <div className="comment-section">
            <h3 className="comment-title">Comments</h3>
            <form onSubmit={handleSubmit} className="comment-form">
                <textarea 
                    value={comment} 
                    onChange={handleChange} 
                    placeholder="Add a comment..." 
                    className="comment-input"
                />
                <br />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <ul className="comment-list">
                {comments.map((c, index) => (
                    <li key={index} className="comment-item">{c.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
