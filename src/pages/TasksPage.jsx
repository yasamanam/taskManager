import "react-toastify/dist/ReactToastify.css";

import React, { useContext, useEffect, useState } from "react";

import AddTask from "./../components/AddTask";
import Header from "./../components/Header";
import Tasks from "./../components/Tasks";
import { ThemeContext } from "./../context/theme/ThemeContext";
import { toast } from "react-toastify";

const TasksPage = () => {
  const [title, setTitle] = useState("Task Manager");
  const [tasks, setTasks] = useState([]);
  const [num, setNum] = useState(1);
  const [showAddtask, setShowAddtask] = useState(false);
  const { isDark, setIsDark } = useContext(ThemeContext);

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
      const response = await fetch(`http://localhost:5000/tasks`);
      const data = await response.json();
      return data;
    } catch (err) {
      toast.error("request failed!");
    } finally {
      console.log("it is done!!");
    }
  };

  /*
   * Fetch a single Task by Id
   */
  const fetchTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      toast.error("request failed!");
    }
  };

  /*
   * Delete a task
   */
  const handleDelete = (taskId) => {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 404) {
          toast.error("Not defined");
        }
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((err) => {
        toast.error("request failed!");
      });
  };

  /*
   * Toggle reminder
   */
  const reminderToggle = async (id) => {
    /*
     * Step1. Find the task you want to toggle
     */
    const taskToToggle = await fetchTask(id);

    /*
     * Step2. Toggle reminder property of the founded object
     */
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    /*
     * Step3. Save the changes of the task object
     */
    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const data = await res.json();
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      );
    } catch (error) {
      toast.error("error happened!");
    }
  };

  /*
   * Add task
   */
  const addTask = async (task) => {
    try {
      const res = await fetch("http://localhost:5000/tasks/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      setTasks([...tasks, data]);
      toast.success(`${data.text} added successfully`);
    } catch (e) {
      toast.error(`${task.text} didn't add becuase of an unkown error:(`);
    }
  };

  return (
    <div
      // style={{
      //   backgroundColor: !isDark ? "yellow" : "black",
      // }}
      className="container"
    >
      {/* <button onClick={() => setIsDark(!isDark)}>
        {!isDark ? "Dark mode" : "Light mode"}
      </button> */}
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

export default TasksPage;
