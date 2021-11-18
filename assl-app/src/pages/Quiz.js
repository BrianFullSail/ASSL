import React from 'react'
import { useLocation } from 'react-router-dom'

function Quiz(){
    const location = useLocation()
    const id = location.state.data
    const question = id.Questions

    let questions = question.map((q) => {
        let choices = q.Choices.map((element) => {
            let choiceName = element.questionId
            return <article key={element.choice} style={styles.article}><input type="radio" name={choiceName} value={element.choice}></input>
            <label>{element.choice}</label></article>
        })
        return <article key={q.question}>
            <h2>{q.question}</h2>
            {choices}
        </article>
    })

    return(
        <section style={styles.main}>
            <h1>{id.name}</h1>
            <form style={styles.form} name="myForm">
                <section style={styles.sections}>{questions}</section>
                <input type="submit" style={{margin: "5rem"}}/>
            </form>
        </section>
    )
}

export default Quiz

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