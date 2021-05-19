import { FaWindowClose } from "react-icons/fa";
import React from "react";

const Task = ({ task, onDelete, reminderToggle }) => {
  return (
    <div
      className={`task event ${task.reminder && "reminder"}`}
      onDoubleClick={() => reminderToggle(task.id)}
    >
      <div>
        <p>{task.text}</p>
        <p>{task.day}</p>
      </div>

      <FaWindowClose
        className="task__close"
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Task;
