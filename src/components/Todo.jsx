import React,{useState} from "react";
import { HiXMark } from "react-icons/hi2";
import { IconContext } from "react-icons";

export default function Todo({ task,deleteTask,theme }) {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <>
      <div
        key={task.id}
        className={`${theme === "light" ? "bg-white" : "bg-bgInput" } w-full h-64 flex items-center justify-between shadow-box p-6 first: rounded-t-5 border-none last:rounded-b-5`}
      >
        <input
          className=" checkbox w-5 h-5 rounded-full checked:bg-gradient-to-r from-grad1 to-grad2"
          type="checkbox"
          checked={task.completed}
          onClick={()=>{((task.completed)=!task.completed)}}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        <h3 className={`${task.completed ? "line-through text-line" : "no-underline"} ${theme === "light" ?"text-text-color" :"text-darkText"}  text-base leading-3`}>{task.taskname}</h3>
        <IconContext.Provider value={{color:"#979797"}}>

        <HiXMark onClick={()=>deleteTask(task.id)} className={`${theme === "dark" ? "bg-darkLine" : ""}text-lg`} />
        </IconContext.Provider>
      </div>
      <div className={`border border-solid ${theme === "light" ? "border-line" : "border-darkLine"}`}></div>
    </>
  );
}
