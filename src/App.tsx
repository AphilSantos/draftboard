import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import BrandForm from './components/BrandForm'
import CreatorForm from './components/CreatorForm'
import BrandDashboard from './components/BrandDashboard'
import CreatorDashboard from './components/CreatorDashboard'
import LoginForm from './components/LoginForm'
import AdminDashboard from './components/AdminDashboard'
import CreateBrief from './components/CreateBrief'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/brand/register" element={<BrandForm />} />
          <Route path="/creator/register" element={<CreatorForm />} />
          <Route 
            path="/brand/dashboard" 
            element={
              <ProtectedRoute requiredUserType="brand">
                <BrandDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/creator/dashboard" 
            element={
              <ProtectedRoute requiredUserType="creator">
                <CreatorDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/brand/create-brief" 
            element={
              <ProtectedRoute requiredUserType="brand">
                <CreateBrief />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App 