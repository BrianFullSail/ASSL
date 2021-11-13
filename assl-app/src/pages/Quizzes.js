import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'

function Quizzes() {
    const [ quizData, setQuizData ] = useState(null)
    
    useEffect(() => {
        async function getQuizzes(){
            let response = await fetch("http://localhost:3000/quizzes", {
                method: "GET",
                headers: { "Accept": "application/json" }
            })
            
            if(response.redirected === true){
                response = await fetch("http://localhost:3000/auth/login", {
                method: "GET",
                headers: { "Accept": "text/html" }})
                console.log(response)
            }
            else{
                console.log(response)
            }
         }
         getQuizzes()
         
         
    }, [quizData])
    
    return (
        <section>
            Not working!
            {quizData && <p>{quizData}</p>}
            {quizData && <p dangerouslySetInnerHTML={{__html: quizData}}></p>}
        </section>
    )
}
export default Quizzes;