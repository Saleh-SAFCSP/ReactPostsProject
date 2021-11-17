import './App.css';

import React, { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/v1/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  const onClick = async () => {
    const response = await fetch('/api/v1/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ inputData: input }),
    });
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className='App'>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type='text'
      ></input>
      <input type='button' value='Send Data' onClick={onClick}></input>
    </div>
  );
};

export default App;
