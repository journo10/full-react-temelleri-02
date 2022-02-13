import React from 'react'
import "./App.css"
import Container from './components/Container'
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <Container />
            </UserProvider>
        </ThemeProvider>
    )
}

export default App