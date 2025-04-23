const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ title: req.body.title });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// Toggle todo completed
router.put('/api/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  const updated = await todo.save();
  res.json(updated);
});

// Delete a todo
router.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;