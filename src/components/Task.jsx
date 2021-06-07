import { FaWindowClose } from "react-icons/fa";
import React from "react";
import { useHistory } from "react-router-dom";

const Task = ({ task, onDelete, reminderToggle }) => {
  let history = useHistory();

  return (
    <div
      className={`task event ${task.reminder && "reminder"}`}
      onDoubleClick={() => reminderToggle(task.id)}
      onClick={() => history.push(`/task/${task.id}`)}
    >
      <div>
        <p>{task.text}</p>
        <p>{task.day}</p>
      </div>

      <FaWindowClose
        className="task__close"
        onClick={(e) => {
          onDelete(task.id);
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default Task;
