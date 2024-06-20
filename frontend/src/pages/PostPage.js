import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post', error);
            }
        };
        fetchPost();
    }, [postId]);

    const handleUpvote = () => {
        axios.post(`http://localhost:5000/api/posts/${postId}/upvote`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error));
    };

    const handleComment = () => {
        axios.post(`http://localhost:5000/api/comments`, { content: comment, post: postId })
            .then(response => setPost({ ...post, comments: [...post.comments, response.data] }))
            .catch(error => console.log(error));
    };

    return (
        post && (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>Upvotes: {post.upvotes}</p>
                <button onClick={handleUpvote}>Upvote</button>
                <h3>Comments</h3>
                <ul>
                    {post.comments.map(comment => (
                        <li key={comment._id}>{comment.content}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button onClick={handleComment}>Comment</button>
            </div>
        )
    );
};

export default PostPage;
