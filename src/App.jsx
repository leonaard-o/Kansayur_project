
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {


  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route />
        </Routes>
    </Router>
    
    </>
  )
}

export default App
