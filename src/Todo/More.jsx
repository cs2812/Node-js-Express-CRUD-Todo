import React from 'react'
import {
    Box,
    Text,
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"

const More = ({item,Singletodo}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box>
        <Button onClick={onOpen} >More Details</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Individual Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <Text fontSize="2xl">Position : {item.id}</Text>
             <Text fontSize="2xl">Task : {item.todo}</Text>
             <Text fontSize="2xl">Status : {item.status?"Done":"Pending"}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
}

export default More
