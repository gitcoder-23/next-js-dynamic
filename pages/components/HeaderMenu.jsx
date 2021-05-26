import React, {useState, useEffect} from 'react'
import Link from 'next/link'

const HeaderMenu = () => {

  const [isMobile, setIsMobile] = useState(false);

  const linkClick = (e, data) => {
    document.querySelectorAll('.scroll-to-section a').forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
  }


  const linkActiveOnPageLoad = (id) => {
    // console.log('id->', id);
    document.querySelectorAll('.scroll-to-section a').forEach(el => el.classList.remove('active'));
    document.querySelector(`${id}-link`).classList.add('active');
  }

  useEffect(() => {
    if(window.location.hash !== ''){
      linkActiveOnPageLoad(window.location.hash);
    }
    
    
  }, []);

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
                  <li className="scroll-to-section"><Link href="#top"><a id="top-link" onClick={(e) => linkClick(e, '#top')} className="active">Home</a></Link></li>
                  <li className="scroll-to-section"><Link href="#about"><a id="about-link" onClick={(e) => linkClick(e, '#about')}>About Us</a></Link></li>
                  <li className="scroll-to-section"><Link href="#services"><a id="services-link" onClick={(e) => linkClick(e, '#services')}>Services</a></Link></li>
                  <li className="scroll-to-section"><Link href="#portfolio"><a id="portfolio-link" onClick={(e) => linkClick(e, '#portfolio')}>Portfolio</a></Link></li>
                  <li className="scroll-to-section"><Link href="#blog"><a id="blog-link" onClick={(e) => linkClick(e, '#blog')}>Blog</a></Link></li> 
                  <li className="scroll-to-section"><Link href="#contact"><a id="contact-link" onClick={(e) => linkClick(e, '#contact')}>Message Us</a></Link></li> 
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
