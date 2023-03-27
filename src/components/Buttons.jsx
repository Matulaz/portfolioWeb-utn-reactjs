import * as React from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './Buttons.css'


function Buttons () {

    return (
    <ChakraProvider>
        <Flex justify='center' >
            <Box className='Buttons-container' display='flex' alignItems='center'>
                    <Box p='30px' ps='20'>web-dev projects</Box>
                    <Box p='30px'borderLeft='#E8E2E2 solid 2px'>skills & background</Box>
                    <Box p='30px' pe='20' borderLeft='#E8E2E2 solid 2px'>more about me...</Box>
            </Box>
        </Flex>
    </ChakraProvider>
    )
}

export default Buttons;