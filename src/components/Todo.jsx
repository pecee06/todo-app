import { useTodosContext } from "../contexts/todos.context"
import {editIcon, deleteIcon, checkboxIcon, saveIcon} from "../assets/assets"
import { useRef } from "react"

const Todo = ({todo={}}) => {
  const {editTodo, deleteTodo, toggleTodo} = useTodosContext()
  const checkboxRef = useRef(null)
  const taskRef = useRef(null)
  const editRef = useRef(null)

  return (
    <form className="flex items-center">
        <button className="bg-green-500 px-2 py-[4.5px]" onClick={e => {
          e.preventDefault()
          checkboxRef.current.classList.toggle("invisible")
          taskRef.current.classList.toggle("line-through")
          toggleTodo(todo.id)
        }}>
          <img src={checkboxIcon} ref={checkboxRef} height={35} width={35} className="invisible" />
        </button>

        <input type="text" ref={taskRef} className="bg-white w-[40vw] px-3 py-2 text-xl focus:outline-0 mx-1" value={todo.task} disabled onChange={e => {
          editTodo(todo.id, e.target.value)
        }} />

        <button className="bg-yellow-400 px-2 py-[4.5px]">
          <img src={editIcon} ref={editRef} height={35} width={35} onClick={e => {
            e.preventDefault()
            taskRef.current.toggleAttribute("disabled")
            if (taskRef.current.hasAttribute("disabled"))
                editRef.current.setAttribute("src",`${editIcon}`)
            else editRef.current.setAttribute("src",`${saveIcon}`)
          }} />
        </button>

        <button className="bg-pink-700 px-2 py-[4.5px]" onClick={e => {
          e.preventDefault()
          deleteTodo(todo.id)
        }} >
          <img src={deleteIcon} height={35} width={35} />
        </button>
    </form>
  )
}

export default Todo