import { useState } from "react";
// import { useTaskStore } from "../store/useTaskStore";

export default function Todos() {
  // const { addTask } = useTaskStore();
  const [title, setTitle] = useState("");

  const handelClick = () => {
    console.log(title);
  };

  return (
    <>
      <input placeholder="Task" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handelClick}>Add</button>
    </>
  );
}
