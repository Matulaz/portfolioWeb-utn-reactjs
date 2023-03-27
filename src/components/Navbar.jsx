import * as React from 'react'
import { useState } from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './Navbar.css'

function Navbar () {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
        <Flex>
        <Box className="Navbar" p='20px' w='100%' bg='white' align='end'>
        <Box w='95%'>
            <a href="">Home</a>
            <a href="">Portfolio</a>
            <a href="">About me</a>
            <a href="">Contact</a>
        </Box>

        </Box>
        </Flex>
    </ChakraProvider>
  )
}

export default Navbar;
