import axios from 'axios';

const TodoItem = ({ todo, onUpdate }) => {
    const toggleCompleted = async () => {
        await axios.put(`http://localhost:5000/todos/api/todos/${todo._id}`);
        onUpdate();
    };

    const deleteTodo = async () => {
        await axios.delete(`http://localhost:5000/todos/api/todos/${todo._id}`);
        onUpdate();
    };

    return (
        <li className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded shadow-sm">
            <div>
                <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.title}
                </p>
                <p className="text-sm text-gray-500">Status: {todo.completed ? 'Completed' : 'Pending'}</p>
            </div>
            <div className="flex gap-2">
                {!todo.completed && (
                    <button
                        onClick={toggleCompleted}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                        Mark as Completed
                    </button>
                )}
                <button
                    onClick={deleteTodo}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
