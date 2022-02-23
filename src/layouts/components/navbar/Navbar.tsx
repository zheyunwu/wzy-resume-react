import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <Link className="navbar-title" to="/">Zheyun Wu</Link>
        {/* For mobile */}
        <div className="navbar-mobile">
          <input type="checkbox" />
          <span id="s1"></span>
          <span id="s2"></span>
          <span id="s3"></span>
          <div className="navbar-menu-mobile">
            <HashLink className="navbar-menu-item" to='/#profile'>Profile</HashLink>
            <HashLink className="navbar-menu-item" to='/#education'>Education</HashLink>
            <HashLink className="navbar-menu-item" to='/#work-experience'>Work Experience</HashLink>
            <HashLink className="navbar-menu-item" to='/#skills'>Skills</HashLink>
            <HashLink className="navbar-menu-item" to='/#contacts'>Contacts</HashLink>
          </div>
        </div>
        {/* For desktop */}
        <div className="navbar-desktop">
          <div className="navbar-menu">
            <HashLink className="navbar-menu-item" to='/#profile'>Profile</HashLink>
            <HashLink className="navbar-menu-item" to='/#education'>Education</HashLink>
            <HashLink className="navbar-menu-item" to='/#work-experience'>Work Experience</HashLink>
            <HashLink className="navbar-menu-item" to='/#skills'>Skills</HashLink>
            <HashLink className="navbar-menu-item" to='/#contacts'>Contacts</HashLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
