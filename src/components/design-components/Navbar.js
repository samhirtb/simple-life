import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import '../../CSS/styles.css';

function Navbar({toggleTheme}) {
    const {pathname} = useLocation();

    return (
        <nav>
            <ul>
            <li><Link to="/" className={pathname === "/" ? "current-page" : undefined}>
                HOME
            </Link></li>
            <li><Link to="/about-me" className={pathname === "/about-me" ? "current-page" : undefined}>
                ABOUT ME
            </Link></li>
            <li><Link to="/recent-posts" className={pathname === "/recent-posts" ? "current-page" : undefined}>
                RECENT POSTS
            </Link></li>
            <li><a href="#" onClick={toggleTheme}>SWITCH THEME</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;