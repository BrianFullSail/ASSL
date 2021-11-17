import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Quizzes() {
    const [ quizData, setQuizData ] = useState([])
    
    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        async function getQuizzes(){
            const response = await fetch("http://localhost:3000/quizzes", {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    "X-Access-Token": query.get('auth_token')
                }
            })
            const data = await response.json()

            console.log(data)

            setQuizData(data)
            
         }
         getQuizzes()
         
         
    }, [])

    // map through the quizzes and display each quiz
    let quizzes = quizData.map((element,i) => {
        return <Link to="../Quiz" key={element.id}>{element.name}<br/></Link>
    })
    
    return (
        <section>
            <h2>Available Quizzes</h2>
            {quizzes}
        </section>
    )
}
export default Quizzes;