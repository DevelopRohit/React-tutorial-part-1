import styles from "./Foodinput.module.css";
function Foodinput() {
    let handleChange = (e) =>{
        console.log(e.target.value);
        texttoshow = "Food Item enter by user "
        
    }
    return <>
    <input type="text" className={styles.input} onChange={handleChange}/>
    <button className={styles.foodbtn}>Enter</button>
    {texttoshow}
    </>
}
export default Foodinput;