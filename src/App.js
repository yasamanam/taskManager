import React, { useEffect, useState } from "react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [title, setTitle] = useState("Task Manager");
  const [tasks, setTasks] = useState([]);
  const [num, setNum] = useState(1);
  const [showAddtask, setShowAddtask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  /*
   * Fetch Tasks
   */
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    return data;
  };

  /*
   * Delete a task
   */
  const handleDelete = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  /*
   * Toggle reminder
   */
  const reminderToggle = (id) => {
    let tempTask = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(tempTask);
  };

  /*
   * Add task
   */
  const addTask = (task) => {
    let id = Math.floor(Math.random() * 100) + 1;
    let newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        headerTitle={title}
        num={num}
        onAdd={() => setShowAddtask(!showAddtask)}
        showAddtask={showAddtask}
      />
      {showAddtask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasksList={tasks}
          onDelete={handleDelete}
          reminderToggle={reminderToggle}
        />
      ) : (
        <div className="noTasks">No Tasks To show</div>
      )}
    </div>
  );
};

export default App;
