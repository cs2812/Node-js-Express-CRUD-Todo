import './App.css';
import AddTodo from './Todo/AddTodo';
import Todo from './Todo/Todo';
import {
  Text,
} from "@chakra-ui/react"
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const[todo,setTodo]=useState([])
  const[single,setSingle]=useState({})

  let getTodo=()=>{
    axios.get("http://localhost:8000/product")
    .then((r)=>setTodo(r.data))
  }
  let Singletodo=(id)=>{
    axios.get(`http://localhost:8000/product/${id}`)
    .then((r)=>{
      // console.log(r.data)
      setSingle(r.data)
    })
  }

  let postTodo=(payload)=>{
    // console.log(payload)
    axios.post("http://localhost:8000/product",payload)
    .then((r)=>{
        alert("Add Success")
        getTodo()
    })
  }

  let putTodo=(payload)=>{
    axios.patch(`http://localhost:8000/product/${payload.id}`,payload)
    .then((r)=>{
        alert("Update Success")
        getTodo()
    })
  }

  let deleteTodo=(id)=>{
    // console.log(id)
    axios.delete(`http://localhost:8000/product/${id}`)
    .then((r)=>{
        alert("Delete Success")
        getTodo()
    })
  }


  useEffect(()=>{
    getTodo()
  },[])
  return (
    <div className="App">
      <Text fontSize="4xl" fontWeight="600" color="yellowgreen">Express Todo</Text>
      <AddTodo postTodo={postTodo}/>
      <Todo todo={todo} putTodo={putTodo} deleteTodo={deleteTodo} item={single} Singletodo={Singletodo}/>
    </div>
  );
}

export default App;
