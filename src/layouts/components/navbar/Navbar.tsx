import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-hash-link';

import './Navbar.scss';


import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAuth, AuthState, logout } from 'store/slices/authSlice';

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

  // Auth state
  const authState: AuthState = useAppSelector<AuthState>(selectAuth);
  const dispatch = useAppDispatch();

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
  }


  return (
    <nav className={`navbar fixed-top ${solid ? 'solid' : ''}`} ref={navbarRef}>
      <div className="navbar-wrapper">
        <Link className="navbar-title" to="/">Zheyun Wu</Link>
        {/* Menu for mobile */}
        <div className="navbar-mobile">
          <input type="checkbox" />
          <span id="s1"></span>
          <span id="s2"></span>
          <span id="s3"></span>
          <div className="navbar-menu-mobile">
            <Link className="navbar-menu-item" to='/#profile'>Profile</Link>
            <Link className="navbar-menu-item" to='/#education'>Education</Link>
            <Link className="navbar-menu-item" to='/#work-experience'>Work Experience</Link>
            <Link className="navbar-menu-item" to='/#skills'>Skills</Link>
            <Link className="navbar-menu-item" to='/#contact'>Contact</Link>
          </div>
        </div>
        {/* Menu for desktop */}
        <div className="navbar-desktop">
          <div className="navbar-menu">
            <Link className="navbar-menu-item" to='/#profile'>Profile</Link>
            <Link className="navbar-menu-item" to='/#education'>Education</Link>
            <Link className="navbar-menu-item" to='/#work-experience'>Work Experience</Link>
            <Link className="navbar-menu-item" to='/#skills'>Skills</Link>
            <Link className="navbar-menu-item" to='/#contact'>Contact</Link>
          </div>
        </div>
        {/* Admin panel */}
        {authState.isLoggedin && (
          <div className="navbar-right">
            Hi, {authState.email}! &nbsp;
            <Link className="navbar-right-btn" to='/admin'>Admin</Link>
            <button className="navbar-right-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
