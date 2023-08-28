import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './style'

export default function App() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}
