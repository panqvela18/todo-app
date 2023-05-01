import React from "react";

export default function Tabs({setFilter,filter,theme}) {
  return (
       <div className={`flex items-center ${theme === "light" ? "bg-white shadow-tabShadow" : "bg-bgInput shadow-darkBox"} rounded-5 justify-between px-60 py-15 mt-15 `}>
          <div className={`${filter === "All" ? "text-blue-500" : "text-placeholder-color " } font-bold text-base`}onClick={()=>setFilter("All")}>All</div>
          <div className={`${filter === "Active" ? "text-blue-500" :"text-placeholder-color" } font-bold text-base`}onClick={()=>setFilter("Active")}>Active</div>
          <div className={`${filter === "Completed" ? "text-blue-500" : "text-placeholder-color"} font-bold text-base`} onClick={()=>setFilter("Completed")}>Completed</div>
        </div>
    
      
  );
}
