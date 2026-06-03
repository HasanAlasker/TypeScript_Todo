import { create } from "zustand";
import type { Task } from "../types/task";
interface TaskStore {
  tasks: Task[]
  loading: boolean
  loadTasks: () => void
  saveTasks: (tasks: Task[]) => void
  addTask: (task: Task) => void
  completeTask: (id: Task['id']) => void
  deleteTask: (id: Task['id'] ) => void
}

const STORARAGE_KEYS = {
  TASKS: "@tasks",
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: JSON.parse(localStorage.getItem(STORARAGE_KEYS.TASKS) ?? 'null') ?? [],
  loading: false,

  loadTasks: () => {
    set({ loading: true });
    const storedTasks = JSON.parse(localStorage.getItem(STORARAGE_KEYS.TASKS) ?? 'null');
    if (storedTasks) set({ tasks: storedTasks });
    set({ loading: false });
  },

  saveTasks: (tasks) => {
    set({tasks: tasks})
    localStorage.setItem(STORARAGE_KEYS.TASKS, JSON.stringify(tasks))
  },

  addTask: (task) => {
    if (!task.title) return

    const updatedTasks = [...get().tasks, task];
    get().saveTasks(updatedTasks)
  },

  completeTask: (id) => {
    if(!id) return
    
    const updatedTasks = get().tasks.map((t)=> t.id === id ? {...t, isCompleted: !t.isCompleted} : t)
    get().saveTasks(updatedTasks)

  },

  deleteTask: (id) => {
    if (!id) return;

    const updatedTasks = get().tasks.filter((t) => t.id !== id);
    get().saveTasks(updatedTasks)
  },
}));
