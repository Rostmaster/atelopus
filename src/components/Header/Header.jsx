import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/atelopus_limosus.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={style.header}>
            <img src={logo} alt=''/>
            <h1>Atelopus</h1>

            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <span className={style.sss}>{props.login}</span>
                            {/*<img src={}/>*/}
                          </div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>);
};

export default Header;