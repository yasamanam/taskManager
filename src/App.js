import React, { useState } from "react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const title = "Task Manager";
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);
  const [showAddtask, setShowAddtask] = useState(false);

  /*
   * Delete a task
   */
  const handleDelete = (taskId) => {
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
        num={2}
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
