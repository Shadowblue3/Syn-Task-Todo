import React from 'react'

const Navbar = () => {
  return (
    <nav className = "flex justify-between items-center m-2 bg-black text-white p-4 rounded-[10px] min-h-[10vh]">
  <div className = "text-[20px] font-extrabold" >Syn-Task</div>
  <ul className = "flex gap-10 pr-3">
    <li className="font-bold hover:bg-white hover:text-black p-2 hover:rounded-[10px] hover:cursor-pointer">Home</li>
    <li className="font-bold hover:bg-white hover:text-black p-2 hover:rounded-[10px] hover:cursor-pointer">Your Todo</li>
  </ul>
</nav>
  )
}

export default Navbar
