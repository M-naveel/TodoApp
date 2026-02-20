import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../app/features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // get todo selected for editing from redux
  const editingTodoId = useSelector((state) => state.editingTodoId);

  // when to
  useEffect(() => {
    if (editingTodoId) {
      // const todoToEdit = todos.find(t => t.id === editingTodoId)
      if (editingTodoId) {
        setInput(editingTodoId.text);
      }
    }
  }, [editingTodoId]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editingTodoId) {
      dispatch(updateTodo({ id: editingTodoId.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border my-2  border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 mb-2 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={input.length == 0}
      >
        {editingTodoId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
