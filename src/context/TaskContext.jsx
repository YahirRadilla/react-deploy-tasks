import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  }

  function deletTask(id) {
    const tasksDelet = tasks.filter((value) => value.id !== id);
    setTasks(tasksDelet);
    console.log(tasksDelet);
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deletTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
