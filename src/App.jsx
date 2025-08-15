import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
const [todo, setTodo] = useState("")
const [todoList, setTodoList] = useState([])

useEffect(() => {
  let todoString = localStorage.getItem("todoList")
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todoList"))
    setTodoList(todos)
  }
}, [])


const AddClickHandler = ()=>{
    let newList = [...todoList, {id: uuidv4(), todo, isCompleted: false}]
    setTodoList(newList)
    setTodo("")
    console.log(todoList)
    localStorage.setItem("todoList", JSON.stringify(newList))
}

const handleChange = (e)=>{
  setTodo(e.target.value)
}

const checkBoxHandler = (e)=>{
  let uid = e.target.name
  let targetIndex;
  for(let i = 0; i < todoList.length; i++){
    if(todoList[i].id === uid){
      targetIndex = i;
    }
  }
  let newTodos = [...todoList];
  newTodos[targetIndex].isCompleted = !newTodos[targetIndex].isCompleted;
  setTodoList(newTodos)
  localStorage.setItem("todoList", JSON.stringify(newTodos))
}

const EditClickHandler = (e, id)=>{
  let l = todoList.filter(item=>{
    return item.id === id
  })
  setTodo(l[0].todo)
  let uid = id
  let newList = todoList.filter(item=>{
    return item.id !== uid
  })
  setTodoList(newList)
  localStorage.setItem("todoList", JSON.stringify(newList))
}
const DeleteClickHandler = (e)=>{
  let uid = e.target.id
  let newList = todoList.filter(item=>{
    return item.id !== uid
  })
  setTodoList(newList)
   localStorage.setItem("todoList", JSON.stringify(newList))
}

  return (
    <>
      <Navbar/>
      <div className="bg-gray-100 m-2 min-h-[86vh] rounded-[10px]">
  <div className="flex justify-center gap-10 p-2">
    <input value={todo} onChange={handleChange} className="border rounded-[10px] p-1 min-w-[400px]"type="text" placeholder="Add your Todo's"/>
    <button onClick={AddClickHandler} className="bg-black text-white p-2 font-bold rounded-[10px] pl-4 pr-4 cursor-pointer">Add</button>
  </div>
  <div className="bg-white p-3 rounded-[10px] min-h-[75vh] m-2.5">
    <h1 className="p-3 font-extrabold text-[20px]">Your Todos</h1>

    {todoList.map(item=>{
    return <div key={item.id} className="list flex justify-between items-center mt-5">
      <div className="box flex gap-5">
      <input onChange={checkBoxHandler} type="checkbox" name={item.id} checked={item.isCompleted}/>
      <div className={item.isCompleted?"border w-[50vw] p-3 shadow-xl rounded-[10px] line-through":"border w-[50vw] p-3 shadow-xl rounded-[10px] "}>{item.todo}</div>
      </div>
      <div className="flex gap-7 pr-5 ">
        <button onClick={(e)=>{EditClickHandler(e, item.id)}} className="bg-black text-white p-2 font-bold rounded-[10px] pl-4 pr-4 cursor-pointer">Edit</button>
        <button id={item.id} onClick={DeleteClickHandler} className="bg-black text-white p-2 font-bold rounded-[10px] pl-4 pr-4 cursor-pointer">Delete</button>
      </div>
    </div>
  })}

  </div>
</div>
    </>
  )
}

export default App
