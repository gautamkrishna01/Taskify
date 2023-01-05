import React, { useState } from 'react'
import { ToDo } from './model'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import Todolist from './Todolist'
type Props={
    todo:ToDo,
    todos:ToDo[],
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
    
}

const SIngleTodo = ({todo,todos,setTodos}:Props) => {
    const[edit,setEdit]=useState<boolean>(false)
const[editTodo,setEditTodo]=useState<string>(todo.todo)
    const handleDelete=(id:number)=>
    {
   setTodos(todos.filter((todo)=>todo.id!==id))
    }
   const handleEdit=(e:React.FormEvent,id:number)=>
   {
  e.preventDefault()
  setTodos(todos.map((todo)=>(
    todo.id===id?{...todo,todo:editTodo}:todo
  )))
  setEdit(false)
   }
  return (
    <>
    <form className='todos_single' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {edit ?(
<input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todo_single_text"/>
        ):(
<p></p>
        )}
        <span className='todos-single-text'>{todo.todo}</span>
        <div>
            <span className='icons' onClick={()=>{if(!edit && !todo.isDone)
                {
                    setEdit(!edit)
                }}}>
            <AiFillEdit/>
            </span>
            <span className='icons' onClick={()=>handleDelete(todo.id)}> 
            <AiFillDelete/>
            </span>
            <span className='icons' >
            <MdDone/>
            </span>
        </div>

    </form>
    </>
  )
}

export default SIngleTodo