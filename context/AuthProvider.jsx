import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const initialEmployees = [
        {
            name: 'Admin User',
            email: 'admin@me.com',
            password: '123',
            role: 'admin'
        },
        {
            name: 'John Doe',
            email: 'john@example.com',
            password: '123456',
            role: 'employee',
            department: 'IT',
            joinDate: '2024-01-01'
        }
    ]

    const [userData, setUserData] = useState(() => {
        try {
            const savedData = localStorage.getItem('employeeData')
            return savedData ? JSON.parse(savedData) : initialEmployees
        } catch {
            return initialEmployees
        }
    })

    useEffect(() => {
        localStorage.setItem('employeeData', JSON.stringify(userData))
    }, [userData])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
    )
}

export default AuthProvider