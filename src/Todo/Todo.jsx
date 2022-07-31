import React from 'react'
import {
    Box,
    Text,
    Button,
    Flex,
} from "@chakra-ui/react"
import {RiDeleteBinLine} from "react-icons/ri"
import {GrUpdate} from "react-icons/gr"
import More from './More'

const Todo = ({todo,putTodo,deleteTodo,item,Singletodo}) => {

    let update=(e)=>{
        let newdata={
            ...e,status:!e.status
        }
        putTodo(newdata)
    }
  return (
    <Box >
        {todo.map((e)=>{
            return<Flex gap="10px" justifyContent="center" mt="10px" key={e.id} >
                <Text fontSize="2xl">{e.todo}</Text>
                <Button>{e.status? "Done":"Pending"}</Button>
                <Button onClick={()=>deleteTodo(e.id)}><RiDeleteBinLine/></Button>
                <Button onClick={()=>update(e)}><GrUpdate/></Button>
                <Button onClick={()=>Singletodo(e.id)}> <More item={item}/> </Button>
                
            </Flex>
        })}
      
    </Box>
  )
}

export default Todo
