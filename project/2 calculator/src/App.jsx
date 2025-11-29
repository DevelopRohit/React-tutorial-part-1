import styles from "./App.module.css";
import Container from "./Container";
import Input from "./Input";
import Buttton_container from "./Buttton_container";
import { useState } from "react";
function App() {
  let [calvalue, setcalvalue] = useState("");
  let onButtonclick = (event) => {
    console.log( event.target.innerText);
  //   if (event.target.innerText === "C") {
  //     setcalvalue("");
      
  //   }else if (event.target.innerText === "=") {
  //     setcalvalue(eval(calvalue));
  //   }else{
  //   let Newdisplayvalue = calvalue + event.target.innerText;
  //   setcalvalue(Newdisplayvalue);

  // }
}

  return (
    <>
      <h1 className={styles.heading}> Calculator App</h1>
      <div className={styles.container}>
        <Input displayvalue={calvalue}></Input>
        <Buttton_container onButtonclick={onButtonclick}></Buttton_container>
      </div>
    </>
  );
}

export default App;
