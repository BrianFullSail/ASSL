import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

function Quiz(){
    const location = useLocation()
    const id = location.state.data
    const question = id.Questions

    let questions = question.map((element) => {
        let choices = element.Choices.map((element) => {
            
            return <article key={element.choice} style={styles.article}><input type="radio" name="choice" value={element.choice}></input>
            <label>{element.choice}</label></article>
        })
        return <article key={element.question}>
            <h2>{element.question}</h2>
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