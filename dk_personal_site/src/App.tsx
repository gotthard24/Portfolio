import { Route, Routes } from 'react-router-dom'
import './App.css'
import CV from './components/CV'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/cv' element={<CV/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
