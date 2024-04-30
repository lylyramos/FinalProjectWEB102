import React, { useState } from 'react';import './CreatePost.css'
import { supabase } from '../client'


const CreatePost = () => {

    const [post, setPost] = useState({name: "", nationality: "", category: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Final')
            .insert({name: post.name, nationality: post.nationality, created: post.created_at})
            .select();

        window.location = "/";

    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="nationality">Nationality</label><br />
                <input type="text" id="nationality" name="nationality" onChange={handleChange} /><br />
                <br/>

                <label for="category">Category (Ex. spicy, sweet, sour)</label> <br />
                <input type="text" id="category" name="category" value={post.category} onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost