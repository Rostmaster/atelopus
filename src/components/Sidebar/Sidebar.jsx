import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {

    return (

        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>{props.sideBar.tabs.profile}</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>{props.sideBar.tabs.messages}</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>{props.sideBar.tabs.news}</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>{props.sideBar.tabs.music}</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>{props.sideBar.tabs.settings}</NavLink>
            </div>

            <div className={style.space}>

            </div>




        </nav>);
};
export default Sidebar;
