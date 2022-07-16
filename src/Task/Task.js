import { useEffect, useState } from 'react';


function Task() {
  const [taskList, setTaskList] = useState(localStorage.taskList ? JSON.parse(localStorage.taskList) : undefined);
  const [firstRunning, setFirstRunning] = useState(true);

  useEffect(() => {
    if (firstRunning) {
      console.log('useEffect started!');
      if (localStorage.taskList === undefined) {
        localStorage.taskList = JSON.stringify(['One', 'Two']);
      }
      setTaskList(() => JSON.parse(localStorage.taskList));

      console.log('useEffect ran!');
    }
    setFirstRunning(() => false);
  }, [firstRunning]);
  

  return (
    <ul>
      {taskList ? taskList.map((task, i) => (
        <li key={i}>{task}</li>
      )) : ''
      }
    </ul>
  );
}

export default Task;