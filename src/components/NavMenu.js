import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MdClose, MdMenu } from 'react-icons/md'


const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 0.3rem 0;
  background: #C3B091;
  ul {
    list-style-type: none;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li{
      display: inline-block;
      // border-radius: 8px;
      transition: .3s ease background-color;
      &:hover{
        // background-color: #8E806A;
      }
    }
  }
  a {
    text-decoration: none;
    color: #D0CAB2;
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 2rem;
    outline: none;
    &:hover{
      color: #89B5AF;
    }
  }
  .active {
    color: #89B5AF;
  }
  .mobile-menu-icon{
    position: absolute;
    right: 1rem;
    top: 1rem;
    witdth: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon{
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-items{
      display: none;
      // transform: translateY(calc(-100% - var (--top)))
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems{
      --top: 1rem;
      transition: .3s ease transform;
      background-color: #C3B091;
      padding: 1rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        *{
          pointer-event: none;
        }
      }
      li{
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu></MdMenu>
      </div>
      <ul className={!showNav ? 'navItems hide-items' : 'navItems'}>
        <div className="closeNavIcon"
          onClick={()=> SetShowNav(!showNav)}
          role ="button"
          onKeyDown={()=>SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose></MdClose>
        </div>
        <li>
          <NavLink to="/" onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}>Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
