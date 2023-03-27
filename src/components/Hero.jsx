import * as React from 'react'
import { useState } from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import './Hero.css'
import foto from '../img/foto2.png'


function Hero () {
    const [count, setCount] = useState(0)

    return (
    <ChakraProvider>
        <Flex className="Hero" pt='100px' h='800px'>
            <Box flex w='60%' pt='170' pl='220'>
            <h1 className='txt-hero h1'>Hi! I'm <span className='txt-hero-span h1'>Matias</span></h1>
            <h3 className='txt-hero-span h3'>A mobile/web Developer</h3>

                <Flex pt='40px'>
                    <Box as='div' textAlign='start'>
                        <h6 className='hero-h6'>Email:</h6>
                        <p><a className='hero-a' href='mailto:matiaszarate.psi@gmail.com'>matiaszarate.psi@gmail.com</a></p>
                    </Box>

                    <Box as='div' ps='20' m='0'>
                        <h6 className='hero-h6'>Linkedin:</h6>
                        <p><a className='hero-a' href='https://www.linkedin.com/in/matiaszarate/'>linkedin.com/matiaszarate</a></p>
                    </Box>
                </Flex>

            </Box>
            <Box w='30%'>
            <img src={ foto } alt='matulaz' style={{ width: 500}}/>
            </Box>

        </Flex>
    </ChakraProvider>
    )
}

export default Hero;
