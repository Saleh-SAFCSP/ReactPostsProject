const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const posts = [];

app.get('/api/v1/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/v1/posts', (req, res) => {
  const newPost = req.body.inputData;
  posts.push(newPost);
  res.json(posts);
});

app.listen(5000, () => {
  console.log('Server is running in port 5000');
});
