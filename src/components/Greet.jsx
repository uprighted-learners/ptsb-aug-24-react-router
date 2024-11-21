import React from 'react'
import { useParams } from 'react-router-dom'

export default function Greet() {
    const { name } = useParams()
    console.log(name)

    return (
        <div>Welcome to my page, {name}</div>
    )
}
