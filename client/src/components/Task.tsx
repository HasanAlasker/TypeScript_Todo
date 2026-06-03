import { useTaskStore } from "../store/useTaskStore";
import type { Task } from "../types/task";

export default function Task({ id, title, isCompleted }: Task) {
  const { completeTask, deleteTask } = useTaskStore();

  return (
    <div className="flex justify-between items-center mx-3 bg-gray-50 px-5 py-3 rounded-lg transition-transform hover:-translate-y-1 border-y border-gray-200">
      <p
        className={`font-semibold text-2xl ${isCompleted ? "line-through" : ""}`}
      >
        &#x2022; {title}
      </p>
      {!isCompleted ? (
        <button
          onClick={() => completeTask(id)}
          className="bg-blue-600 text-xl text-white p-2 rounded-lg hover:bg-blue-800 transition-all"
        >
          Complete
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => completeTask(id)}
            className="bg-blue-600 text-xl text-white p-2 rounded-lg hover:bg-blue-800 transition-all"
          >
            Undo
          </button>

          <button
            onClick={() => deleteTask(id)}
            className="bg-red-600 text-xl text-white p-2 rounded-lg hover:bg-red-800 transition-all"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
