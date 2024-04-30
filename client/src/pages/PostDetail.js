import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './PostDetail.css';
import Comments from './Comments';

const PostDetail = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('Final')
                    .select()
                    .eq('id', id);

                if (error) {
                    throw error;
                }

                if (data && data.length > 0) {
                    setPost(data[0]);
                } else {
                    throw new Error('Post not found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div className="spinner" />; // Display loading spinner
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="PostDetail">
            <h2 className="plate-details">Plate Details</h2>
            <p className="name">Plate's Name: {post.name}</p>
            <p className="nationality">Nationality: {post.nationality}</p>
            <p className="category">Category: {post.category}</p>
            <Comments postId={id} />
        </div>
    );
};

export default PostDetail;
