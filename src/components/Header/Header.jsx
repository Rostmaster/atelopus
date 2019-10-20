import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/atelopus_limosus.png'
const Header = () =>{
    return(
    <header className={s.header}>
        <img src={logo} alt=''/>
        <h1>Atelopus</h1>
    </header>);
};

export default Header;