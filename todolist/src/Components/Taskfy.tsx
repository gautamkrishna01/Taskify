import React, { useState } from 'react'
import "./App.css"
import Inputfeild from './Inputfeild'
import { ToDo } from './model'
import Todolist from './Todolist'
const Taskfy = () => {
    const[todo,setTodo]=useState<string>("")
    const[todos,setTodos]=useState<ToDo[]>([])
    const handleAdd=(e:React.FormEvent)=>
    {
       e.preventDefault()
       if(todo)
       {
        setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
        setTodo("")
       }
    }
    console.log(todos)
  return (
    <>
    <div className="App">
        <span className='heading' >Taskify</span>
        <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <Todolist todos={todos} setTodos={setTodos}/>
    </div>
    </>
  )
}

export default Taskfy