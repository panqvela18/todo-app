import React from 'react'

export default function Footer({setTodo,setFilter,theme}) {
  return (
    <div onClick={()=>{setTodo([]);setFilter("All")}} className='flex items-center justify-center'>
        <p className={`mt-10 ${theme === "light" ? "text-placeholder-color" :"text-footerColor" }  cursor-pointer mb-52`}>Drag and drop to reorder list</p>
    </div>
  )
}
