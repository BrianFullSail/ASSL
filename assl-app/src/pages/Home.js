import React from 'react'

function Home() {
    const query = new URLSearchParams(window.location.search)
    fetch("http://localhost:3000/quizzes", {
        headers: {
            "Accept": "application/json",
            "X-Access-Token": query.get('auth_token')
        }
    })
    return (
        <section style={styles.body}>
            <article style={styles.news}>
                <div style={styles.newsArticle}>
                    <h2>Welcome to Quizzes for the masses!</h2>
                    <a href="https://github.com/login/oauth/authorize?client_id=b65327d6f18a2484c20b">Login to GitHub</a>
                </div>
            </article>
        </section>
    )
}

export default Home;

const styles = {
    body: {
        width: '75vw',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '4rem'
    },
    news: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '.25rem',
        boxShadow: '0 0 5px 5px #D6D7DD'
    },
    images: {
        width: '100%',
        height: '100%',
        borderRadius: '.25rem .25rem 0 0',
        objectFit: 'cover'
    },
    newsArticle: {
        marginLeft: '2rem',
        marginRight: '2rem',
        marginBottom: '2rem',
    },
    links: {
        color: '#1f7a8c',
        textDecoration: 'none',
    }
}