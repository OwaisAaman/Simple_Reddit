import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Feed</h2>
      <div style={styles.feed}>
        {posts.map(post => (
          <div key={post._id} style={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Author: {post.author_id.username}</p>
            <p>Subreddit: {post.subreddit_id.name}</p>
            <p>Upvotes: {post.votes.upvotes} | Downvotes: {post.votes.downvotes}</p>
            <div>
              {post.comments.map(comment => (
                <div key={comment._id} style={styles.comment}>
                  <p>{comment.body}</p>
                  <p>Comment by: {comment.author_id}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#222',
    color: '#fff',
    minHeight: '100vh',
  },
  heading: {
    color: '#ff4500',
  },
  feed: {
    marginTop: '20px',
  },
  post: {
    backgroundColor: '#333',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  comment: {
    backgroundColor: '#444',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default Home;

