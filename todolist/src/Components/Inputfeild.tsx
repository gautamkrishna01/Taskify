import React from "react";
import "./style.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const Inputfeild = ({ todo, setTodo,handleAdd }: Props) => {
  return (
    <>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="input"
          placeholder="Enter a Task"
          className="inputbox"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default Inputfeild;
