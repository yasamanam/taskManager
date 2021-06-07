import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { toast } from "react-toastify";

const TaskPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTask(id);
  }, []);

  /*
   * Fetch a single Task by Id
   */
  const fetchTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await response.json();
      setTaskData(data);
      if (response.status === 404) {
        toast.error("Not found");
        history.push("/");
      }
    } catch (err) {
      toast.error("request failed!");
    }
  };

  return (
    <div className="container">
      <h1>{taskData?.text}</h1>
      <p>{taskData?.day}</p>
    </div>
  );
};

export default TaskPage;
