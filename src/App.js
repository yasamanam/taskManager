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
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    } finally {
      console.log("it is done!!");
    }
  };

  /*
   * Delete a task
   */
  const handleDelete = (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch((err) => console.log(err));
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
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    console.log(data);
    setTasks([...tasks, data]);
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
      {tasks?.length > 0 ? (
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
