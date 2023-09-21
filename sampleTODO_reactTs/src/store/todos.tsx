import { createContext, ReactNode, useState, useContext } from "react";

export type TodosProviderProps = {
    children: ReactNode 
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddToDo:(task:string) => void;
    toggleTodoAsCompleted:(id:string)=> void;
    handleDeleteTodo:(id:string)=> void;
}

export const todosContext = createContext<TodosContext | null >(null)

export const TodosProvider = ({children}:TodosProviderProps) => {

    const[todos, setTodos] = useState<Todo[]> (() => {
        try{
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]

        } catch (error) {
            return []
        }
    })
    // getting the localstorage data 

    const handleAddToDo = (task:string) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            // console.log("data from newtodos", {newTodos, prev})

            localStorage.setItem("todos", JSON.stringify(newTodos))
            //setting the data
            return newTodos
        })
    }

    // when completed 
    
    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev) =>{
            let newTodos = prev.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed:!todo.completed}
                }
                return todo;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            //setting the data
            return newTodos
        })
    }

    //deleting the data for todo
    const handleDeleteTodo = (id:String) => {
        setTodos((prev) =>{
            let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos))
            //setting the data
            return newTodos;
        })
    }

    return <todosContext.Provider value={{todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo}}>
       {children}
    </todosContext.Provider>

} 

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos is used outside of Provider")
    }
    return todosConsumer;
}
