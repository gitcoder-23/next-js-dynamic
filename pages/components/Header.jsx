import React from 'react'

export default function Header () {
    return (
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h4>Spac<span>Dyna</span></h4>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#about">About Us</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
                  <li className="scroll-to-section"><a href="#blog">Blog</a></li> 
                  <li className="scroll-to-section"><a href="#contact">Message Us</a></li> 
                  <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Now</a></div></li> 
                </ul>        
                <a class='menu-trigger'> 
                    <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}
