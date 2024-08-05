import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name : "todos",
    initialState :{ 
        allTodos : [{id : 1, tittle : "Here Some Tittle..." }],
        edit : {
          todo : {},
          isEdit : false
        },
   
    },
    reducers : {
 
      // Add Todo

      add : (state , action) => {
        return{
          ...state,
          allTodos : [...state.allTodos , action.payload]
        };
      },

   

    // Remove Todo

      remove : (state , action) => {
        return{
          ...state,
          allTodos : [...state.allTodos.filter(item => (item.id!==action.payload))]
        };
      },
    
      // Edit Todo

      edit : (state , action) => {
        return{
          ...state,
          edit : {todo : action.payload , isEdit : true}
        };
      },
 

      // Remove All Todo

      removes : (state , action) => {
        return{
            ...state,
            allTodos : [...state.allTodos.filter (item => item.todo.id !== action.payload)]
        };
      },




    },
});

export const {add , edit , remove , removes} = todoSlice.actions
export default todoSlice.reducer