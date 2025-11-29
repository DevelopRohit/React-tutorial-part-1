import Appname from "./component/Appname";
import Apptodo from "./component/Apptodo";
import Iteamcontainer from "./component/Iteamcontainer";
import Welcomemessage from "./component/Welcomemessage";
import "./App.css";
import { useState } from "react";
function App() {
  let [todoitem, setTodoItem] = useState([]);
  let [itemname, setitemname] = useState(todoitem);
  let [itemdate, setitemdate] = useState(todoitem);

  let itemnenamehandle = (event) => {
    // console.log(event.target.value);
    setitemname(event.target.value);
  };

  let itemdatehandle = (event) => {
    // console.log(event.target.value);
    setitemdate(event.target.value);
  };

  let addbuttonhandleclick = () => {
    let newtodoitem = {
      todoname: itemname,
      tododate: itemdate,
    };
    setTodoItem([...todoitem, newtodoitem]);
  };
  let handledeleteitems = (todoitemname) => {
    let newtodoitem = todoitem.filter((item) => {
      item.name !== todoitemname;
    });
    setTodoItem(newtodoitem);
  };

  return (
    <center className="Todo-containt">
      <Appname />
      <Apptodo
        itemnenamehandle={itemnenamehandle}
        itemdatehandle={itemdatehandle}
        addbuttonhandleclick={addbuttonhandleclick}
      />
      {todoitem.length === 0 && <Welcomemessage></Welcomemessage>}
      <Iteamcontainer
        todoitem={todoitem}
        onDeleteclick={handledeleteitems}
      ></Iteamcontainer>
    </center>
  );
}
export default App;
