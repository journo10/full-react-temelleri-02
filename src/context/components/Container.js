import React from 'react'
import  Header  from './Header'
import Button from './Button'
import { useTheme } from '../contexts/ThemeContext'
import Profile from './Profile'


function Container() {
    const {theme} = useTheme()
    
    return (
        <div className={`app ${theme}`}>
            <Header /><hr />
            <Button /><hr />
            <Profile/>
        </div>
    )
}

export default Container