import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:5000/api/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div style={styles.container}>
            {profile ? (
                <div>
                    <h2>{profile.username}'s Profile</h2>
                    <p>Email: {profile.email}</p>
                    <p>Subscribed Subreddits: {profile.subscribedSubreddits.length}</p>
                    <p>Total Upvotes: {profile.upvotes}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        color: '#fff',
    },
};

export default Profile;

