import {useState} from "react"

const AddtoDo = () => {
    const[todo, setTodo] = useState("")
  return (
    <form>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">ADD TODO</button>
    </form>
  )
}

export default AddtoDo