import Button from "./Buttons"


const Header = ({title, showAddTask, onShow}) => {
  
  return(
    <header className="header">
    <h1>{title}</h1>
    <Button buttonText={onShow ? "Close": "Add"}
      color={onShow ? 'red': 'green'}
    onClick={showAddTask}
/>
    </header>
    );
}


export default Header;