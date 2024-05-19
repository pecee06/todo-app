import { TodosProvider } from "./contexts/todos.context"
import { useState, useEffect } from "react"
import {TodoForm, Todo} from "./components/components"

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodo(task) {
    let todo = {
      id: String(Date.now()),
      task,
      completed: false
    }
    setTodos(prev => [...prev, todo])
  }
  function editTodo(id, task) {
    setTodos(prev => (
      prev.map(todo => {
        if (todo.id == id) todo.task = task
        return todo
      })
    ))
  }
  function deleteTodo(id) {
    setTodos(prev => (
      prev.filter(todo => todo.id != id)
    ))
  }
  function toggleTodo(id) {
    setTodos(prev => (
      prev.map(todo => {
        if (todo.id == id) todo.completed = true
        return todo
      })
    ))
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")))
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <TodosProvider value={{todos, addTodo, editTodo, deleteTodo, toggleTodo}}>
      <main className="h-screen w-screen bg-slate-900 flex flex-col py-5 items-center gap-10">
        <h1 className="text-white text-3xl">Manage your Todos</h1>
        <TodoForm/>
        <hr className="bg-white w-screen" />
        <div className="flex flex-col gap-1">
          {
            todos.map((todo,index) => (
              <Todo key={index} todo={todo} />
            ))
          }
        </div>
      </main>
    </TodosProvider>
  )
}

export default App