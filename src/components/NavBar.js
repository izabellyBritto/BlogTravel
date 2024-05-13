
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'; 

const NavBar = () => {
  return (
      <nav>
        <nav className={styles.NavBar}>
      <NavLink to="/" className={styles.brand}>
        BLOG<span>TRAVELS</span> 
        </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) =>  (isActive ? styles.active: "")}>Home</NavLink>          
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) =>  (isActive ? styles.active: "")}>Sobre</NavLink>          
        </li>
        <li>
          <NavLink to="/produtos" className={({isActive}) =>  (isActive ? styles.active: "")}>Produtos</NavLink>          
        </li>
        <li>
          <NavLink to="/login" className={({isActive}) =>  (isActive ? styles.active: "")}>Login</NavLink>          
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) =>  (isActive ? styles.active: "")}>Cadastrar</NavLink>          
        </li>
      </ul>
    </nav>
    </nav>
    
  );
};

export default NavBar;
