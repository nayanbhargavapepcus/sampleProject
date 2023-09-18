import AddtoDo from "./components/addTodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"

const App = () => {
  return (
    <main>
      <h1>TODO APP SAMPLE</h1>
      <Navbar />
      <AddtoDo />
      <Todos />
    </main>
  )
}

export default App