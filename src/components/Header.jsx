import React from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import logo from "../assets/TODO.svg";

export default function Header({theme,setTheme}) {
  return (
    <div className="flex items-center justify-between pt-9">
       <img src={logo} alt="logo" />
       {theme === "light" ?<img className="cursor-pointer" onClick={()=>setTheme((theme) =>"dark")} src={moon} alt="moon" /> : <img className="cursor-pointer" onClick={()=>setTheme((theme) =>"light")} src={sun} />}
    </div>
  );
}
