import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Quiz(){
    // useLocation to pass the state from the Quizzes page to access the data passed
    const location = useLocation()
    const id = location.state.data
    const question = id.Questions

    // mapping through the passed object to get the questions
    let questions = question.map((q) => {
        // mapping through the passed object again to get the choices
        let choices = q.Choices.map((element) => {
            let choiceName = element.questionId
            //returning the radio button choices to the final return below
            return <article key={element.choice} style={styles.article}><input type="radio" name={choiceName} value={element.choice} required={true}></input>
            <label>{element.choice}</label></article>
        })
        // gathering the questions and choices to return
        return <article key={q.question}>
            <h1>{q.question}</h1>
            {choices}
        </article>
    })

    return(
        <section style={styles.main}>
            <h1>{id.name}</h1>
            <form style={styles.form} action="/Quizzes" name="myForm">
                <section style={styles.sections}>{questions}</section>
                <input type="submit" style={{margin: "5rem"}}/>
            </form>
        </section>
    )
}

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center"
    },
    sections: {
        width: "50%",
        marginLeft: "25%",
        display: "flex",
        flexDirection: "column",
    },
    form: {
        width: "50%",
        marginLeft: "25%",
    },
    article: {
        width: "75%",
        display: "flex",
        alignContent: "start",
        marginLeft: "25%"
    }
}