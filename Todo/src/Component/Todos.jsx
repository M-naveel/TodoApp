import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo , setFilter} from "../app/features/todo/todoSlice";
import { editTodo, toggleTodo } from "../app/features/todo/todoSlice";
import FilterButton from "./FilterButton";


function Todos() {
  const dispatch = useDispatch();
  const {todos , filter} = useSelector((state) => state);
  
  const filterTodos = todos.filter(todo=>{
    if(filter == "Completed") return todo.completed 
    
    if(filter == "incompleted") return !todo.completed
    return true
  })
  

  return (
    <>
    <div className="main-content">

    
    <FilterButton />

      {/* <div>Todos</div> */}
      {
        filterTodos.length === 0 ? (<p className="mt-2 bg-red-500 py-3 text-white text-lg rounded-lg  ">No todo is Found</p>)

        :
      (
      <ul className="list-none">
        {filterTodos.map((todo) => (
          <li
           
           className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center bg-zinc-800 px-4 py-3 rounded gap-3"
            key={todo.id}
          >
            <div className="text-white  "  style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}>{todo.text}</div>
            <div className="flex items-center gap-2">
              {/* toggle button to mark the todo complete or incomplete */}
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => {
                  dispatch(editTodo(todo));
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.65-1.65a1.875 1.875 0 112.652 2.652L8.25 18.402 3 21l2.598-5.25L16.862 4.487z"
                  />
                </svg>
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      )
    }
    </div>
    </>
  );
}

export default Todos;
