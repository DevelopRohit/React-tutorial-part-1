import styles from "./Buttton_container.module.css";
function Buttton_container({onButtonclick}) {
  let btns = [
    "C",
    "CE",
    "+",
    "-",
    "%",
    "/",
    "*",
    ".",
    "=",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
  ];
  return (
    <>
      <div className={styles.btn_container}>
        {btns.map((el) => (
          <button onClick={onButtonclick}>{el}</button>
        ))}
      </div>
    </>
  );
}

export default Buttton_container;
