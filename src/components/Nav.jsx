import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
        </nav >
    )
}
