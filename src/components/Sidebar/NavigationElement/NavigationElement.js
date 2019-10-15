import style from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

let NavigationElement = (props) => {

    return (
        <div>
            <NavLink to="/profile" activeClassName={style.activeLink}>{props.sideBar.tabs.profile}</NavLink>
        </div>
    );
};
export default NavigationElement;