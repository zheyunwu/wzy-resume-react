import { FC, useEffect, useState, useRef } from 'react';

import './Navbar.scss';

const Navbar: FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [solid, setSolid] = useState<boolean>(false);

  const changeBackground = () => {
    const navbarHeight = navbarRef && navbarRef.current ? navbarRef.current.clientHeight : 0;
    if (window.scrollY >= window.innerHeight - navbarHeight) {
      setSolid(true);
    } else {
      setSolid(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav className={`navbar fixed-top ${solid ? 'solid' : ''}`} ref={navbarRef}>
      <div className="navbar-wrapper">
        <a className="navbar-title" href="/">
          Zheyun Wu
        </a>
        {/* For mobile */}
        <div className="navbar-mobile">
          <input type="checkbox" />
          <span id="s1"></span>
          <span id="s2"></span>
          <span id="s3"></span>
          <div className="navbar-menu-mobile">
            <a className="navbar-menu-item" href="#profile">Profile</a>
            <a className="navbar-menu-item" href="#education">Education</a>
            <a className="navbar-menu-item" href="#experience">Experience</a>
            <a className="navbar-menu-item" href="#skills">Skills</a>
            <a className="navbar-menu-item" href="#contact">Contact</a>
          </div>
        </div>
        {/* For desktop */}
        <div className="navbar-desktop">
          <div className="navbar-menu">
            <a className="navbar-menu-item" href="#profile">Profile</a>
            <a className="navbar-menu-item" href="#education">Education</a>
            <a className="navbar-menu-item" href="#experience">Experience</a>
            <a className="navbar-menu-item" href="#skills">Skills</a>
            <a className="navbar-menu-item" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
