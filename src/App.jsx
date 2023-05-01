import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [theme,setTheme] = useState("light")
  return (
    <>
      <div className={`w-screen h-screen ${theme === "light" ? "bg-white" : "bg-bgDark"} overflow-x-hidden `}>
      <div className={`${theme === "light" ? "bg-light-bg-image lg:bg-light-bg-image-desk" : "bg-dark-bg-image lg:bg-dark-bg-image-desk"} w-screen h-1/3 bg-no-repeat bg-cover px-6  lg:px-450`}>
        <Header theme={theme} setTheme={setTheme} />
        <TodoList theme={theme} />
      </div>

      </div>
    </>
  );
}

export default App;
