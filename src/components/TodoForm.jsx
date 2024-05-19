import { useState } from "react"
import { useTodosContext } from "../contexts/todos.context"

const TodoForm = () => {
    const [task, setTask] = useState("")
    const {addTodo} = useTodosContext()

  return (
    <form className="flex gap-4">
        <input type="text" placeholder="Write your Todo" className="w-[40vw] px-3 py-2 text-xl rounded focus:outline-0" value={task} onChange={e => {
        setTask(e.target.value)
        }}/>
        <button className="bg-green-500 text-white px-3 rounded hover:bg-green-600 transition-all" onClick={e => {
            e.preventDefault()
            addTodo(task)
            setTask("")
        }} >Add</button>
    </form>
  )
}

export default TodoForm