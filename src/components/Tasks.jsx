import Proptypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasksList, onDelete, reminderToggle }) => {
  return (
    <div>
      {tasksList.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          reminderToggle={reminderToggle}
        />
      ))}
    </div>
  );
};

Tasks.propTypes = {
  tasksList: Proptypes.array,
};

export default Tasks;
