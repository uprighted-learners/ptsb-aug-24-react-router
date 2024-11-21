import React from 'react'
import './contact.css'
// Hook that allows us to dynamically change the navigation of our UI
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
    return (
        <>
            <div>You are now at /Contact</div>
            <button onClick={() => navigate("/")}>Go Home</button>
        </>
    )
}