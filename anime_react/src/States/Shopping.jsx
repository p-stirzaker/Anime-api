// import {useState} from 'react'

// const Shopping = () => {
//     return(
//         <form>
//             <input type="text" name="Item" placeholder='Enter an item' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
//             <button type="submit">Add</button>
//         </form>
//     );
// }

// export default Shopping;

// const [items, setItems] = useState([]);
// const [itemName, setItemName] = useState("");
// const addItem = event => {
//     event.preventDefault();
//     setItems([...items, {id: itemName.length, name: itemName}]);
//     setItemName("");
// }