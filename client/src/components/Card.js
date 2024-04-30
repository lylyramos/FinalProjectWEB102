import React, { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import { formatDistanceToNow } from 'date-fns';


const Card = (props) => {
    const [count, setCount] = useState(0);
    
    const updateCount = async (event) => {
        event.preventDefault();
      
        await supabase
            .from('Final')
            .update({ betCount: count + 1})
            .eq('id', props.id);
      
        setCount((count) => count + 1);
    }

    return (
        <div className="Card">
            <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
            <p className="createdTime">{props.created_at}</p>
            <h2 className="name">{props.name}</h2>
            <h3 className="nationality">{"From " + props.nationality}</h3>
            <p className="createdTime"> Posted {formatDistanceToNow(new Date(), { addSuffix: true })}</p>
            <button className="betButton" onClick={updateCount}>Favorite👍: {count}</button>
            <Link to={'/detail/' + props.id}><button className="detailButton">See More</button></Link>

        </div>
    );
};

export default Card;
