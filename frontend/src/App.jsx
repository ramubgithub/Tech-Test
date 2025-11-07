import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Tests from './components/Tests/Tests.jsx'
import Results from './components/Results/Results.jsx'
import StartExam from './components/StartExam/StartExam.jsx'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    if(localStorage.getItem("examSubmitted") === "true") {
      localStorage.removeItem("examState");
      localStorage.removeItem("examTimer");
      localStorage.removeItem("examSubmitted");
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tests" element={<Home />}>
        <Route index element={<Tests />} />
        <Route path="results" element={<Results />} />
      </Route>
      <Route path="/tests/start" element={<StartExam />} />
      
      <Route path="*" element={<Navigate to="/tests" />} />
    </Routes>
  )
}

export default App
