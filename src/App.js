import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
)

export default App
