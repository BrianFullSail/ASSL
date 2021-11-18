import React from 'react'

function Home() {
    
    return (
        <section style={styles.body}>
            <article style={styles.news}>
                <div style={styles.newsArticle}>
                    <h1>Welcome to Quizzes for the masses!</h1>
                    <p>Please login to see quizzes</p>
                    <a href="https://github.com/login/oauth/authorize?client_id=b65327d6f18a2484c20b">Login to GitHub</a>
                </div>
            </article>
        </section>
    )
}

export default Home;

const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        margin: '4rem'
    },
    news: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '.25rem',
        boxShadow: '0 0 5px 5px #D6D7DD'
    },
    newsArticle: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '2rem',
    }
}