import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-hash-link';

import './Navbar.scss';


import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectAuth, AuthState, logout } from 'store/slices/authSlice';

const navLinks = [
  {
    title: 'Profile',
    path: '/#profile',
  },
  {
    title: 'Education',
    path: '/#education',
  },
  {
    title: 'Work Experience',
    path: '/#work-experience',
  },
  {
    title: 'Skills',
    path: '/#skills',
  },
  {
    title: 'Contact',
    path: '/#contact',
  }
]

interface NavbarProps {
  dynamicBackground?: boolean;
}

const Navbar: FC<NavbarProps> = ({ dynamicBackground=false }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [solid, setSolid] = useState<boolean>(!dynamicBackground);

  const changeBackground = () => {
    const navbarHeight = navbarRef && navbarRef.current ? navbarRef.current.clientHeight : 0;
    if (window.scrollY >= window.innerHeight - navbarHeight) {
      setSolid(true);
    } else {
      setSolid(false);
    }
  }

  useEffect(() => {
    if (dynamicBackground) {
      window.addEventListener('scroll', changeBackground);
    }
  }, [dynamicBackground]);

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
            {navLinks && navLinks.map(link =>
              <Link className="navbar-menu-item" to={link.path}>{link.title}</Link>
            )}
          </div>
        </div>
        {/* Menu for desktop */}
        <div className="navbar-desktop">
          <div className="navbar-menu">
            {navLinks && navLinks.map(link =>
              <Link className="navbar-menu-item" to={link.path}>{link.title}</Link>
            )}
          </div>
        </div>
        {/* Admin panel */}
        {authState.status === 'loggedIn' && (
          <div className="navbar-right">
            Hi, {authState.user.email}! &nbsp;
            <Link className="navbar-right-btn" to='/admin'>Admin</Link>
            <button className="navbar-right-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
