import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Quizzes() {
    const [ quizData, setQuizData ] = useState([])
    
    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        async function getQuizzes(){
            const headers = {"Accept": "application/json"}
            if (query.get('auth_token')) {
                headers["X-Access-Token"] = query.get('auth_token')
            }
            const response = await fetch("http://localhost:3000/quizzes", {
                method: "GET",
                headers
            })
            const data = await response.json()

            setQuizData(data)
            
         }
         getQuizzes()
         
         
    }, [])


    // map through the quizzes and display each quiz
    let quizzes = quizData.map((element) => {
        return <p style={styles.btn}  key={element.id}><Link style={styles.links} to="../Quiz" state={{data: element}}>{element.name}<br/></Link></p>
    })
    
    return (
        <section>
            <h1>Available Quizzes</h1>
            {quizzes}
        </section>
    )
}
export default Quizzes;

const styles = {
    links: {
        padding: "5px 10px",
        border: "1px solid #006699",
        backgroundColor: "#0097DF",
        color: "white",
        textDecoration: "none",
        margin: "5rem",
        borderRadius: ".25rem"
    },
    btn: {
        margin: "2rem"
    }
}