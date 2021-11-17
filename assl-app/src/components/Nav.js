import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav style={styles.nav}>
            <NavLink style={styles.links} activestyle={styles.activeLink} to='/Home'>Logout</NavLink>
            <NavLink style={styles.links} activestyle={styles.activeLink} to='/Quizzes'>View Quizzes</NavLink>
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
        height: '20%'
    },
    links: {
        color: '#1f7a8c',
        textDecoration: 'none',
    },
    activeLink: {
        color: 'cyan',
        textDecoration: 'underline'
    }
}