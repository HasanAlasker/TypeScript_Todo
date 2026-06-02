import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './screens/Todos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Todos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
