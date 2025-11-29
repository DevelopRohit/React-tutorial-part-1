import style from "./Task.module.css";
import { MdDeleteForever } from "react-icons/md";
function Task({ todoname, tododate, onDeleteclick }) {
  return (
    <div className="row">
      <div className={style.col_4}>{todoname} </div>
      <div className={style.col_4}>{tododate}</div>
      <div className="col-2">
        <button
          type="button"
          className={style.DeleteButton}
          onClick={() => onDeleteclick(todoname)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default Task;
