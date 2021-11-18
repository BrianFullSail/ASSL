import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    function logOut(){
        window.location.href = "/"
    }

    return (
        <nav style={styles.nav}>
            <NavLink style={styles.links} activestyle={styles.activeLink} to='/Home' onClick={logOut}>Logout</NavLink>
            <NavLink style={styles.links} to='/Quizzes'>View Quizzes</NavLink>
        </nav>
    )
}
export default Nav;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        marginTop: "5rem"
    },
    links: {
        padding: "5px 10px",
        border: "1px solid #006699",
        backgroundColor: "#0097DF",
        color: "white",
        textDecoration: "none",
        margin: "1rem",
        borderRadius: ".25rem"
    }
}