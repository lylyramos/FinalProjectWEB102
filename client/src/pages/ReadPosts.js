import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
import './ReadPosts.css';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState('newest'); // Default sorting by newest

    useEffect(() => {
        async function fetchPosts() {
            let { data, error } = await supabase
                .from('Final')
                .select('*')
                .order('created_at', { ascending: sortBy === 'oldest' });
    
            if (error) {
                console.log("error", error);
            } else {
                setPosts(data);
            }
        }
    
        fetchPosts();
    }, [sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className="sort-dropdown">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            <div className="posts">
                {posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card key={index} id={post.id} name={post.name} betCount={post.betCount} createdTime={post.created_at} />
                    ) : <h2>{'No Food Posts Yet 😞'}</h2>
                }
            </div>
        </div>
    );
}

export default ReadPosts;
