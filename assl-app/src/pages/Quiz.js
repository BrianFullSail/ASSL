import React from 'react'
import { useLocation } from 'react-router-dom'

function Quiz(){
    const location = useLocation()
    const id = location.state.data
    console.log(location.state.data)
    console.log(id)
    return(
        <p>Hello there!</p>
    )
}

export default Quiz
