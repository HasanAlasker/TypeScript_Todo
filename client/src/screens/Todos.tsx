import { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import Task from "../components/Task";

export default function Todos() {
  const { tasks, addTask, loadTasks } = useTaskStore();
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const handelClick = () => {
    const id = Date.now();
    addTask({ id: id.toString(), title: title, isCompleted: false });
    setTitle("");
  };

  const RenderTasks = tasks.map((t) => (
    <Task key={t.id} title={t.title} id={t.id} isCompleted={t.isCompleted} />
  ));

  return (
    <div>
      <div className="flex items-center m-3 bg-gray-50 px-5 py-3 rounded-lg mb-15 border-2 border-gray-200">
        <input
          placeholder="Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl flex flex-1 outline-0 caret-blue-400"
        />
        <button className="bg-blue-600 text-xl text-white py-2 px-8 rounded-lg hover:bg-blue-800 transition-all" onClick={handelClick}>Add</button>
      </div>

      {RenderTasks}
    </div>
  );
}
