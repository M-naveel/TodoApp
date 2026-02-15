import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: " I am Naveel",
    },
  ],
  editingTodoId: null,
  filter: "all" ,
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
      // change the todo to complete and undo with the same button
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
      // filter reducer to filter across the todos 
    setFilter: (state , action )=>{
      state.filter = action.payload
    },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo , toggleTodo , setFilter } = todoSlice.actions;
export default todoSlice.reducer;
