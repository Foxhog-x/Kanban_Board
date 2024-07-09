import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
        return (
            <div>{children}</div>
        )
    } else {
        navigate('/login')

    }

}
