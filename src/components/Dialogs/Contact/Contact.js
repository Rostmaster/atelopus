import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Contact.module.css';

const Contact = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={style.dialog}>

        <img src={props.img} className={style.img} alt=''/>
        <NavLink to={path}>{props.name}</NavLink>

    </div>
  );
};
export default Contact;