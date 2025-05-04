import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser)
        setUser(parsedUser.role)
        setLoggedInUserData(parsedUser.data)
      }
    } catch (err) {
      console.error('Error loading user data:', err)
      localStorage.removeItem('loggedInUser')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleLogin = async (email, password) => {
    setError('')
    try {
      // Admin login
      if (email === 'admin@me.com' && password === '123') {
        const adminUser = userData.find(u => u.role === 'admin')
        setUser('admin')
        setLoggedInUserData(adminUser)
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'admin', 
          data: adminUser 
        }))
        return
      }

      // Employee login
      const employee = userData.find(
        (e) => e.email === email && e.password === password && e.role === 'employee'
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: employee
        }))
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid email or password')
      throw err
    }
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {!user ? (
        <Login handleLogin={handleLogin} error={error} />
      ) : user === 'admin' ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard handleLogout={handleLogout} data={loggedInUserData} />
      )}
    </div>
  )
}

export default App