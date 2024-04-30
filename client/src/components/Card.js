import React, { useState, useEffect } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import { formatDistanceToNow } from 'date-fns';

const Card = (props) => {
    const [betCount, setBetCount] = useState(props.betCount);

    useEffect(() => {
        setBetCount(props.betCount);
    }, [props.betCount]);

    const updateCount = async () => {
        await supabase
            .from('Final')
            .update({ betCount: betCount + 1 })
            .eq('id', props.id);

        setBetCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="Card">
            <div className="card-info">
                <Link to={'edit/' + props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
                <p className="createdTime">{props.created_at}</p>
                <h2 className="name">{props.name}</h2>
                <p className="createdTime"> Posted {formatDistanceToNow(new Date(), { addSuffix: true })}</p>
                <button className="betButton" onClick={updateCount}>Favorite👍: {betCount}</button>
            </div>
            <Link to={'/detail/' + props.id}><button className="detailButton">See More</button></Link>
        </div>
    );
};

export default Card;
