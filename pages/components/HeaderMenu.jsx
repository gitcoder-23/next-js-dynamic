import React, {useState} from 'react'
import Link from 'next/link'

const HeaderMenu = () => {

  const [isMobile, setIsMobile] = useState(false);
    return (
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href="/">
                <a className="logo">
                  <h4>Spac<span>Dyna</span></h4>
                </a></Link>
                <ul className={isMobile ? "nav-links-mobile" : "nav"}
                onClick={() => setIsMobile(false)}>
                  <li className="scroll-to-section"><Link href="/#top"><a className="active">Home</a></Link></li>
                  <li className="scroll-to-section"><Link href="/#about"><a>About Us</a></Link></li>
                  <li className="scroll-to-section"><Link href="#services"><a>Services</a></Link></li>
                  <li className="scroll-to-section"><Link href="#portfolio"><a>Portfolio</a></Link></li>
                  <li className="scroll-to-section"><Link href="#blog"><a>Blog</a></Link></li> 
                  <li className="scroll-to-section"><Link href="#contact"><a>Message Us</a></Link></li> 
                  <li className="scroll-to-section contact-butt">
                    <div className="main-red-button">
                    <Link href="#contact"><a>Contact Now</a></Link>
                    </div>
                  </li> 
                </ul>    
                <button 
                className="mobile-menu-icon"
                // toggle effect
                onClick={() => setIsMobile(!isMobile)}>
                  {isMobile ? (
                    <a className='menu-trigger active'> 
                    <span>Menu</span>
                    </a>
                  ) : (
                    <a className='menu-trigger'> 
                    <span>Menu</span>
                    </a>
                  )}
                </button>  

                {/* <a className='menu-trigger'> 
                    <span>Menu</span>
                </a> */}

              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default HeaderMenu;
