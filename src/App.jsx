import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State to show loading indicator
    const [error, setError] = useState(null); // State to handle errors

    // Fetch data from the API when the component mounts
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts') // Fetch posts
            .then((response) => {
                setPosts(response.data.slice(0, 10)); // Limit to first 10 posts
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch posts!');
                setLoading(false);
            });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>React API Example</h1>
            {loading && <p>Loading...</p>} {/* Show loading */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if any */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {posts.map((post) => (
                    <li
                        key={post.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            padding: '10px',
                        }}
                    >
                        <h2 style={{ margin: '0 0 10px' }}>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
