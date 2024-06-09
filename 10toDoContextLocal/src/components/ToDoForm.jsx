import React,{useState} from 'react'
import { useToDo } from '../contexts/ToDoContext';

function ToDoForm() {
    const [toDo,setToDo] = useState("")
    const {addToDo} = useToDo()

    const add = (e)=>{
        e.preventDefault()
        if (toDo) {
            addToDo({toDo: toDo,completed: false})
            setToDo("")
        }

    }
    return (
        <form onSubmit={add} className="flex">
            <input
                value={toDo}
                onChange={(e)=>setToDo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm;

