import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <img src="image source" class="img-fluid rounded-top" alt="" />
                </div>
                <div className='nav_tabs'>
                    <Link to="home" > Home</Link>
                    <Link to="home" > Tests</Link>
                    <Link to="home" > Services</Link>
                    <Link to="home" > About</Link>
                    <Link to="home" > Partner</Link>
                </div>
                <div className='nav_buttons'>
                    <button>signup</button>
                    <button>login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar