import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div style={{backgroundColor: 'transparent'}}>
                <h1 style={{backgroundColor: 'transparent'}} className='heading'>Portfolio</h1>
                <p style={{backgroundColor: 'transparent'}} className='heading sub-heading'>a passionate photographer</p>
            </div>
            <ul  style={{backgroundColor: 'transparent'}}>
                <a href='#profile'><li style={{backgroundColor: 'transparent'}}>About</li></a>
                <a href='#instaFeed'><li style={{backgroundColor: 'transparent'}}>Works</li></a>
                <a href='#testimonials'><li style={{backgroundColor: 'transparent'}}>Testimonials</li></a>
                <li style={{backgroundColor: 'transparent'}}><button className='btn btn-dark btn-sm'>Hire Me</button></li>
            </ul>
            
        </div>
    )
}

export default Navbar
