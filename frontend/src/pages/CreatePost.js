import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const { subredditId } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/posts', {
                title,
                content,
                subreddit: subredditId,
                user: 'your-user-id', // Replace with actual user ID
            });
            navigate(`/subreddits/${subredditId}`);
        } catch (error) {
            console.error('Post creation failed', error);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
