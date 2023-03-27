import * as React from 'react'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
    <div className="App">
      <Navbar />
      <Hero />
      <Buttons />
    </div>
    </ChakraProvider>
  )
}

export default App
