import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", nationality: "", category: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Final')
        .update({name: post.name, nationality: post.nationality, category: post.category})
        .eq('id', id)

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

            await supabase
                .from('Final')
                .delete()
                .eq('id', id);

            window.location = "http://localhost:3000/";
    }


    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label for="nationality">Nationality</label><br />
                <input type="text" id="nationality" name="nationality" value={post.nationality} onChange={handleChange} /><br />
                <br/>
                
                <label for="category">Category</label> <br />
                <input type="text" id="category" name="category" value={post.category} onChange={handleChange} /><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost