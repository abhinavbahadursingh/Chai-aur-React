import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos) || []; // Ensure fallback to an empty array
    const dispatch = useDispatch();

    if (!Array.isArray(todos)) {
        return <p className="text-gray-500 mt-4">Invalid data format for todos.</p>;
    }

    return (
        <>
            <div>Todos</div>
            {todos.length === 0 ? (
                <p className="text-gray-500 mt-4">No todos to display.</p>
            ) : (
                <ul className="list-none">
                    {todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div>{todo.text}</div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                aria-label={`Remove todo: ${todo.text}`}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Todos;
