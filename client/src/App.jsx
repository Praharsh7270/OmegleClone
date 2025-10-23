import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Room from './components/Room.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
