import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  return (
    <div>

      <div  className={style.wallpaper}>
        <img src='https://www.setaswall.com/wp-content/uploads/2017/05/Dual-Monitor-Wallpaper-2-768x247.jpg' alt=' ' />
      </div>

      <div className={style.descroptionBlock}>
        ava + description
      </div>

    </div>
  );
};
export default ProfileInfo;