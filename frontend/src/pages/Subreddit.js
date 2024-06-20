import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Subreddit = () => {
    const { subredditId } = useParams();
    const [subreddit, setSubreddit] = useState(null);

    useEffect(() => {
        const fetchSubreddit = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/subreddits/${subredditId}`);
                setSubreddit(response.data);
            } catch (error) {
                console.error('Error fetching subreddit', error);
            }
        };
        fetchSubreddit();
    }, [subredditId]);

    return (
        <div>
            {subreddit && (
                <div>
                    <h2>{subreddit.name}</h2>
                    <Link to={`/create-post/${subredditId}`}>Create Post</Link>
                    <ul>
                        {subreddit.posts.map(post => (
                            <li key={post._id}>
                                <img src={`/images/post${post._id % 4 + 1}.png`} alt={post.title} />
                                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                                <p>{post.content}</p>
                                <p>Upvotes: {post.upvotes}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Subreddit;

