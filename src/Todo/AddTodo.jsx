import React, { useState } from 'react'
import {
    Box,
    Flex,
    Input,
    Button,
} from "@chakra-ui/react"

const AddTodo = ({postTodo}) => {
    const[task,setTask]=useState("")
    const addData=()=>{
        let newData={
            todo:task,
            status:false
        }
        postTodo(newData)
        setTask("")
    }
  return (
    <Box>
        <Flex pl="30%" pr="30%">
            <Input onChange={(e)=>setTask(e.target.value)} value={task} placeholder='Enter Todo' textAlign="center" />
            <Button onClick={addData}>Add Todo</Button>
        </Flex>
      
    </Box>
  )
}

export default AddTodo
