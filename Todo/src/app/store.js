import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";


export const store = configureStore({

    reducer: todoReducer 
})

// setting the items to local storage
store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem("todos", JSON.stringify(state.todos))
})