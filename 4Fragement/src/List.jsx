import style from "./List.module.css";
function List() {
  let Fooditem = ["Daal", "Rice", "Roti", "Sabzi", "Salad", "Goolbjamun"];
  return (
    <>
      {Fooditem.map((i) => (
        <div className={style.li}>
          {i}
          <button onClick={()=>{console.log(`${i} was clicked`);
          }} className={style.button}>Clicke</button>
        </div>
      ))}
    </>
  );
}
export default List;
