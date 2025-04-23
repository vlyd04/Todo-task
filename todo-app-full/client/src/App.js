import { useEffect, useState } from 'react';
import axios from 'axios';
import AddTodo from './addTodo';
import TodoList from './listTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await axios.get('http://localhost:5000/todos/api/todos');
    setTodos(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center">📝 Todo App</h2>

      <AddTodo onAdd={fetchTodos} />

      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => setFilter('all')} className="px-4 py-2 rounded bg-blue-500 text-white">All</button>
        <button onClick={() => setFilter('completed')} className="px-4 py-2 rounded bg-green-500 text-white">Completed</button>
        <button onClick={() => setFilter('pending')} className="px-4 py-2 rounded bg-yellow-500 text-white">Pending</button>
      </div>

      {loading ? (
        <div className="text-center mt-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 mx-auto" />
          <p className="text-gray-500 mt-2">Loading todos...</p>
        </div>
      ) : (
        <TodoList todos={filteredTodos} onUpdate={fetchTodos} />
      )}
    </div>
  );
}

export default App;
