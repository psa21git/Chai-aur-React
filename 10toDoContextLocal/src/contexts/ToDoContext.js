import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    toDos:[
        {
            id: 1,
            toDo: "ToDo Msg",
            completed: false
        }
    ],
    addToDo: (toDo) => {},
    updateToDo: (id,toDo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider