import React from 'react'

function Home(props) {
    return (
        <section style={styles.body}>
            <article style={styles.news}>
                <div style={styles.newsArticle}>
                    <h2>Welcome to Quizzes for the masses!</h2>
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