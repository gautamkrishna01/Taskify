import React from "react";
import { ToDo } from "./model";
import SIngleTodo from "./SIngleTodo";
import "./style.css";

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const Todolist: React.FC = ({ todos, setTodos }: Props) => {
    
  return (
    <>
      <div className="todos">
        
        {todos.map((todo) => (
          
          <SIngleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            
          />
          
        ))}
      </div>
    </>
  );
};

export default Todolist;
