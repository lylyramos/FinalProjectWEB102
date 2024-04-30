import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'


const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState('created_at');

    useEffect(() => {
        const fetchPost = async () => {
            let { data } = await supabase
                .from('Final')
                .select()
                .order('sortBy', { ascending: true });

            setPosts(data);
        }

        fetchPost();
    }, [sortBy]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    }; 
    
    return (
        <div className="ReadPosts">
            <div className="sortContainer">
                <label className="sortLabel">Sort by:</label>
                <select className="sortSelect" value={sortBy} onChange={handleSortChange}>
                    <option value="created_at">Creation Date</option>
                    <option value="betCount">Favorite Votes</option>
                </select>
            </div>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} nationality={post.nationality} createdTime={post.created_at}/>
                ) : <h2>{'No Food Posts Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;