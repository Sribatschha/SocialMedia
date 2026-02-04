# Social Media CRUD API

A simple CRUD (Create, Read, Update, Delete) API for a Social Media application built with Node.js, Express, and MongoDB.

## Features

- **Create** posts with title, content, author
- **Read** all posts or a single post by ID
- **Update** existing posts
- **Delete** posts

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud)

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Social Media"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   # Windows
   copy .env.example .env
   # Linux/Mac
   cp .env.example .env
   ```
   Edit `.env` and set your `MONGODB_URI` (e.g., MongoDB Atlas connection string for cloud).

4. **Start the server**
   ```bash
   npm start
   ```
   For development with auto-reload: `npm run dev`

## API Endpoints

| Method | Endpoint      | Description      |
|--------|---------------|------------------|
| GET    | /             | API info         |
| GET    | /posts        | Get all posts    |
| GET    | /posts/:id    | Get post by ID   |
| POST   | /posts        | Create a post    |
| PUT    | /posts/:id    | Update a post    |
| DELETE | /posts/:id    | Delete a post    |

### Example Requests

**Create a post:**
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"My First Post\",\"content\":\"Hello World!\",\"author\":\"John Doe\"}"
```

**Get all posts:**
```bash
curl http://localhost:3000/posts
```

## Deploy to GitHub

1. **Initialize git** (if not already done):
   ```bash
   git init
   ```

2. **Add all files and commit:**
   ```bash
   git add .
   git commit -m "Initial commit: Social Media CRUD API"
   ```

3. **Create a new repository on GitHub** (github.com → New repository)

4. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## License

MIT
