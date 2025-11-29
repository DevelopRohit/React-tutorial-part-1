import Task from "./Task";

function Iteamcontainer({ todoitem, onDeleteclick }) {
  return (
    <div className="task-list">
      {todoitem.map((item, index) => (
        <Task
          key={index}
          todoname={item.todoname}
          tododate={item.tododate}
          onDeleteclick={onDeleteclick}
        ></Task>
      ))}
    </div>
  );
}

export default Iteamcontainer;
