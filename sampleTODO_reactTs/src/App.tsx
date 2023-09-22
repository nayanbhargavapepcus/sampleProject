import AddtoDo from "./components/addTodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"

const App = () => {
  return (
    <main>
      <h1 className="heading">TODO APP SAMPLE</h1>
      <Navbar />
      <AddtoDo />
      <Todos />
    </main>
  )
}

export default App