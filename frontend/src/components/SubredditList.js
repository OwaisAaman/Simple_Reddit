import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SubredditList = () => {
    const [subreddits, setSubreddits] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/subreddits')
            .then(response => setSubreddits(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleSubscribe = async (subredditId) => {
        try {
            await axios.post(`http://localhost:5000/api/users/your-user-id/subscribe/${subredditId}`); // Replace with actual user ID
            alert('Subscribed successfully');
        } catch (error) {
            console.error('Subscription failed', error);
        }
    };

    return (
        <div>
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => (
                    <li key={subreddit._id}>
                        <img src={`/images/${subreddit.name}.png`} alt={subreddit.name} />
                        <Link to={`/subreddits/${subreddit._id}`}>{subreddit.name}</Link>
                        <button onClick={() => handleSubscribe(subreddit._id)}>Subscribe</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubredditList;
