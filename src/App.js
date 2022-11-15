import "./App.css";
import DropDown from "./DropDown";
import DropDownList from "./DropDownList";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    const wrapperEl = document.querySelector("[data-id=wrapper]");
    wrapperEl.classList.toggle("open");
  };
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <DropDown onToggle={(e) => handleClick(e)}></DropDown>
        <DropDownList></DropDownList>
        <></>
      </div>
    </div>
  );
}

export default App;
