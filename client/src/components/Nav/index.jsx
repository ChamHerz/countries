import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { StyledLink } from '../../styled components/StyledLink';

function Nav() {
  return (
    <>
      <header className={style.header}>
        <Link to="/home" className={style.logo}>
          <h1 className={style.title}>HENRY COUNTRIES</h1>
        </Link>
        <nav className={style.nav}>
          <StyledLink to="/home" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#2d3b72">
            PAÍSES
          </StyledLink>
          {/* <StyledLink to="/favorite" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#2d3b72">
            ACTIVIDADES
          </StyledLink> */}
          <StyledLink to="/form" color="#1b1e3f" hover="#d9e6ee" active="#d9e6ee" inactive="#2d3b72">
            AGREGAR
          </StyledLink>
          {/* colocar la barra para que direccione correctamente */}
        </nav>
      </header>
    </>
  );
}

export default Nav;
