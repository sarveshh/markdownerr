import React from 'react'
import './Navbar.css'
import navbarItems from './NavbarItems'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import GithubSvg from '../../assets/githubsvg'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="link">Markdownerr</Link>
            <div className="mobile-menu-icon">
                <FaBars />
            </div>
            <div className="menu-items">
                {navbarItems.map((item, index) => (
                    <Link className="link" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <a tabindex="0" href="https://github.com/sarveshh/markdownerr" target="_blank" class="github-corner">
                <GithubSvg />
            </a>
        </nav>
    )
}

export default Navbar
