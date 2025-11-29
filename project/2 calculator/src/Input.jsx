import styles from './Input.module.css';
function input({displayvalue}) {
    return <>
        <input type="text" className={styles.display} id="display" value={displayvalue} readOnly/>
    </>
}
export default input;