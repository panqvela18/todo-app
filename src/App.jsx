import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import img from "./assets/bg-mobile-light.jpg"
function App() {
  const [theme,setTheme] = useState("light")
  return (
    <>
      <div className={`w-screen h-screen ${theme === "light" ? "bg-white" : "bg-bgDark"} overflow-x-hidden `}>
      <div className={`${theme === "light" ? "bg-[url('./assets/bg-mobile-light.jpg')] lg:bg-[url('./assets/bg-desktop-light.jpg')]" : "bg-[url('./assets/bg-mobile-dark.jpg')] lg:bg-[url('./assets/bg-desktop-dark.jpg')]"} w-screen h-1/3 bg-no-repeat bg-cover px-6  lg:px-450`}>
        <Header theme={theme} setTheme={setTheme} />
        <TodoList theme={theme} />
      </div>

      </div>
    </>
  );
}

export default App;
