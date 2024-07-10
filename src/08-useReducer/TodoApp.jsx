import { useEffect, useReducer } from "react"
import { todoReducer, TodoList, TodoAdd } from '../08-useReducer'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false
    // },
    
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init )
 
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }


    useEffect(() => {
        console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    return (
        <>
            <h1>Todo App: 10, <small>Pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
  )
}
