import { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        await axios.post('http://localhost:5000/todos/api/todos', { title });
        setTitle('');
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter todo title"
                className="flex-1 border rounded px-4 py-2"
                required
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </form>
    );
};

export default AddTodo;

