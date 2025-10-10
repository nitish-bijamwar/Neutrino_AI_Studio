import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mt-10 tracking-tight hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
  Hello World!
</h1>


    </>
  )
}

export default App
