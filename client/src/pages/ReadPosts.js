import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'


const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await supabase
                .from('Final')
                .select()
                .order('created_at', { ascending: true });

            setPosts(data);
        }

        fetchPost();
    }, []);
    
    
    return (
        <div className="ReadPosts">
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