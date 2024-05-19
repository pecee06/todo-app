import { createContext, useContext } from "react";

const TodosContext = createContext({
    todos: [
        // {
        //     id: "",
        //     task: "",
        //     completed: false
        // }
    ],
    addTodo: (task)=>{},
    editTodo: (id, task)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
})

const TodosProvider = TodosContext.Provider

function useTodosContext() {
    return useContext(TodosContext)
}

export {TodosProvider, useTodosContext}