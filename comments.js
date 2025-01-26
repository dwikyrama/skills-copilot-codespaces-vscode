// Create web server
// Use express to create web server
const express = require("express");
const app = express();
// Use body-parser to parse the body of the request
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// Use cors to allow cross-origin requests
const cors = require("cors");
app.use(cors());

// Store comments in an array
let comments = [
  {
    username: "alice",
    comment: "I love the weather today",
    upvotes: 0,
  },
  {
    username: "bob",
    comment: "This is such a nice comment",
    upvotes: 0,
  },
  {
    username: "charlie",
    comment: "I like this comment",
    upvotes: 0,
  },
];

// Get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Add a comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Upvote a comment
app.post("/upvote", (req, res) => {
  const { username } = req.body;
  const comment = comments.find((c) => c.username === username);
  comment.upvotes = comment.upvotes + 1;
  res.json(comment);
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log("Server listening on 4001");
});