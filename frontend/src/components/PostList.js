import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const PostList = () => {
    const { subredditId } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/subreddits/${subredditId}`)
            .then(response => setPosts(response.data.posts))
            .catch(error => console.log(error));
    }, [subredditId]);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;

