import MenuItem from "./menu-item";
import "./styles.css";
function MenuList({ list = [] }) {
  return (
    <ul >
      
      {list && list.length > 0
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}

export default MenuList;
