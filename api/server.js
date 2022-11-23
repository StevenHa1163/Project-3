const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI||"mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const Todo = require('./models/Todo');

// finds todos using md if connecting to port 3001
app.get('/todos', async (req, res) =>{
    const todos = await Todo.find();

    // stores our todos
    res.json(todos);
});

app.listen(3001, () => console.log("Server started on port 3001"));