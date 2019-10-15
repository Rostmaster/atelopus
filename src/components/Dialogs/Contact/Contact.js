import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Contact.module.css';

const Contact = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={style.dialog}>

        <NavLink to={path}><img src={props.img} className={style.img} alt=''/></NavLink>
        <NavLink to={path} className={style.name}>{props.name}</NavLink>

    </div>
  );
};
export default Contact;