require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Social Media CRUD API',
    endpoints: {
      'GET /posts': 'Get all posts',
      'GET /posts/:id': 'Get post by ID',
      'POST /posts': 'Create a post',
      'PUT /posts/:id': 'Update a post',
      'DELETE /posts/:id': 'Delete a post',
    },
  });
});

app.use('/posts', postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
