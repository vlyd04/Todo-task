import TodoItem from './editTodo';

const TodoList = ({ todos, onUpdate }) => {
    return (
        <ul className="space-y-4">
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} onUpdate={onUpdate} />
            ))}
        </ul>
    );
};

export default TodoList;


