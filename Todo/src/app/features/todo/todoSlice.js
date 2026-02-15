import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: " I am Naveel",
    },
  ],
  editingTodoId: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    // add todo 
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed : false
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state , action )=>{
            const mark = state.todos.find(t => t.id === action.payload)
            if (mark){
                mark.completed = !mark.completed
            }
    },

    editTodo: (state, action) => {
      // set the todo we want to edit
      state.editingTodoId = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // update the existing todo in the array
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editingTodoId = null; //this will clear the input
    },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo , toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
