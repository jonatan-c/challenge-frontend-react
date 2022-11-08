import { useState } from 'react'
import './App.css'
import ListCharacters from './components/ListCharacters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListCharacters />
    
    </>
  )
}

export default App
