import MenuList from "./menu-list";

function TreeView({ menu = [] }) {
  return (
    <div className="tree-view-container">
          <h2 style={{fontSize:'1.5rem', marginBottom:'20px'}}>Dinamic list from Data</h2>
      <MenuList list={menu} />
    </div>
  );
}

export default TreeView;
