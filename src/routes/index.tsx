import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default RoutesMain
