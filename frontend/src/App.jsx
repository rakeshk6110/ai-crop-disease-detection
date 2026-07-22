import { BrowserRouter,Routes, Route } from 'react-router-dom'

import UploadPage from './pages/UploadPage'
import Login from './pages/Login'
import HistoryPage from './pages/HistoryPage'
import Dashboard from './pages/Dashboard'


import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/upload" element={
          <ProtectedRoute>
            <UploadPage/>
          </ProtectedRoute>
        }/>

        <Route path="/history" element={
          <ProtectedRoute>
            <HistoryPage/>
          </ProtectedRoute>
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
