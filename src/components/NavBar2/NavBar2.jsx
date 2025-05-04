import './NavBar2.css';
import Logo from '../../assets/navbar/logo.svg';
import mobile from '../../assets/navbar/mobile.svg';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar2({ list }) {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  function toggleNav() {
    setOpenNav(!openNav);
  }

  function liFun(id) {
    setOpenNav(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar2" ref={navRef}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={`nav-links ${openNav ? 'active' : ''}`}>
        {list.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, '');
          let path = `/${id}`;
          if (path === "/home") {
            path = "/"
          }

          const isActive = location.pathname === path;

          return (
            <li
              key={id}
              id={id}
              onClick={() => liFun(id)}
              className={isActive ? 'active-link' : ''}
            >
              <NavLink to={path}>{item}</NavLink>
            </li>
          );
        })}
      </ul>

      <button
        onClick={toggleNav}
        className={`nav-mobile ${openNav ? 'active' : ''}`}
      >
        <img src={mobile} alt="Mobile Menu" />
      </button>
    </nav>
  );
}
