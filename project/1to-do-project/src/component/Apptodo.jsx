import style from "./Apptodo.module.css";
import { MdAddTask } from "react-icons/md";
function Apptodo({ itemnenamehandle, itemdatehandle, addbuttonhandleclick }) {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter ToDo Here"
              onChange={itemnenamehandle}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={itemdatehandle} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className={style.AddBtn}
              onClick={addbuttonhandleclick}
            >
              <MdAddTask />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apptodo;
